import React, { createContext, useState } from "react";
import { IChildrenElement, IErrorContext } from "./interfaces";

const ErrorContext = createContext<IErrorContext>({} as IErrorContext);

export const ErrorProvider = ({ children }: IChildrenElement) => {
  const [statusCode, setStatusCode] = useState<number>(0);

  return (
    <ErrorContext.Provider value={{ statusCode, setStatusCode }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContext;
