import React, { createContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import finance_api from "../config/api";
import {
  getOnSessionStorage,
  removeOnSessionStorage,
  saveOnSessionStorage,
} from "../config/storage";
import useError from "../hooks/useError";
import { IAuthContext, IChildrenElement, IJWTUserDecoded } from "./interfaces";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IChildrenElement) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<IJWTUserDecoded | undefined>();
  const navigate = useNavigate();
  const { setStatusCode } = useError();

  const signIn = async (email: string, password: string) => {
    try {
      const response = await finance_api.post("/auth/signin", {
        email,
        password,
      });

      const token = response.data.token;
      saveOnSessionStorage("SSID", token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      setIsAuthenticated(false);
      if (error instanceof AxiosError) {
        return setStatusCode(error.response?.status || 500);
      }
      setStatusCode(500);
    }
  };

  const signOut = () => {
    removeOnSessionStorage("SSID");
    setIsAuthenticated(false);
    navigate("/signin");
  };

  const isValidToken = async () => {
    try {
      const response = await finance_api.post("/auth/checkToken", {
        isATokenValidationFromClientApp: true,
      });
      setIsAuthenticated(true);
      setUser(response.data.decode);
    } catch {
      signOut();
    }
  };

  useEffect(() => {
    if (!getOnSessionStorage("SSID")) {
      return signOut();
    }
    isValidToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
