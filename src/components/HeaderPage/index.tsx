import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { menuModules } from "../Menu/modules";

const HeaderPage = () => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.Page>
        {menuModules.filter((el) => el.link === pathname)[0].title}
      </S.Page>
      <S.Divider />
    </S.Container>
  );
};

export default HeaderPage;
