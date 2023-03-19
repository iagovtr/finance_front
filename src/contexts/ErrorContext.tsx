import React, { createContext, useEffect, useState } from "react";
import Toast from "../components/Toast";
import {
  IChildrenElement,
  IErrorContext,
  IErrorMessagesProps,
  IStatusCode,
} from "./interfaces";

const ErrorContext = createContext<IErrorContext>({} as IErrorContext);

export const errorMessages: IErrorMessagesProps = {
  400: {
    message: "Por favor, verifique os campos do formulário.",
  },
  401: {
    message: "E-mail ou senha incorretos.",
  },
  500: {
    message:
      "Ocorreu um erro ao processar sua requisição. Tente novamente em breve.",
  },
};

export const ErrorProvider = ({ children }: IChildrenElement) => {
  const [statusCode, setStatusCode] = useState<IStatusCode>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatusCode(0);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [statusCode]);

  return (
    <ErrorContext.Provider value={{ statusCode, setStatusCode }}>
      {children}
      <Toast />
    </ErrorContext.Provider>
  );
};

export default ErrorContext;
