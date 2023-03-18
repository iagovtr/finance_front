import { AxiosResponse } from "axios";
import React, { createContext, useEffect, useState } from "react";
import finance_api from "../config/api";

interface IExpenses {
  ExpenseID: number;
  UserID: number;
  Title: string;
  SubCategory: string;
  ExpenseValue: number;
  ExpenseDate: string;
  Surname: string;
  Installments: number;
}

interface IInvoiceContext {
  allExpenses: IExpenses[];
  error: boolean;
}

interface IChildren {
  children: React.ReactNode;
}

const InvoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);

export const InvoiceProvider = ({ children }: IChildren) => {
  const [allExpenses, setAllExpenses] = useState<IExpenses[]>([]);
  const [error, setError] = useState<boolean>(false);

  const loadAllExpenses = async (): Promise<void> => {
    try {
      const response = await finance_api.get(
        "/invoicing/getallexpensesbycustomer"
      );
      setAllExpenses(response.data.expenses);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    loadAllExpenses();
  }, []);

  return (
    <InvoiceContext.Provider value={{ allExpenses: allExpenses, error: error }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;
