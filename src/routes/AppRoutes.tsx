import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import Menu from "../components/Menu";
import Invoice from "../modules/Invoice";
import * as S from "../styles/AppContainer";

const AppRoutes = () => {
  return (
    <Fragment>
      <Menu />
      <S.AppContainer>
        <HeaderPage />
        <Routes>
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </S.AppContainer>
    </Fragment>
  );
};

export default AppRoutes;
