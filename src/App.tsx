import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ErrorProvider } from "./contexts/ErrorContext";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ErrorProvider>
    </BrowserRouter>
  );
};

export default App;
