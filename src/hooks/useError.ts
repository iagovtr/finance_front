import React, { useContext } from "react";
import ErrorContext from "../contexts/ErrorContext";

const useError = () => {
  const context = useContext(ErrorContext);

  return context;
};

export default useError;
