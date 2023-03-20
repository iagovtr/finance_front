import { AxiosError, AxiosResponse } from "axios";
import React, { createContext, useEffect, useState } from "react";
import finance_api from "../config/api";
import useError from "../hooks/useError";
import { IChildrenElement, IExpenses, IInvoiceContext } from "./interfaces";

const InvoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);

export const InvoiceProvider = ({ children }: IChildrenElement) => {
  const [allExpenses, setAllExpenses] = useState<IExpenses[]>([]);
  const { setStatusCode } = useError();

  const loadAllExpenses = async (): Promise<void> => {
    try {
      const response = await finance_api.get(
        "expense/getallexpensesbycustomer"
      );
      setAllExpenses(response.data.expenses);
    } catch (error) {
      if (error instanceof AxiosError) {
        return setStatusCode(error.response?.status || 500);
      }
      setStatusCode(500);
    }
  };

  useEffect(() => {
    loadAllExpenses();
  }, []);

  return (
    <InvoiceContext.Provider value={{ allExpenses: allExpenses }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;
