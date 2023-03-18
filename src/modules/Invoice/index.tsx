import React from "react";
import { InvoiceProvider } from "../../contexts/InvoiceContext";
import ExpenseList from "./components/ExpenseList";

const Invoice = () => {
  return (
    <InvoiceProvider>
      <ExpenseList />
    </InvoiceProvider>
  );
};

export default Invoice;
