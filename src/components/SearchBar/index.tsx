import React from "react";
import * as S from "./styles";
import SearchIcon from "/search.png";

const SearchBar = ({ ...rest }) => {
  return (
    <S.InputContainer>
      <S.SearchIcon src={SearchIcon} alt="Pesquisa" />
      <S.Input {...rest} />
    </S.InputContainer>
  );
};

export default SearchBar;
