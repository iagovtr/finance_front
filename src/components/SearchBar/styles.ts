import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 7.5px;
  width: 20px;
  margin-left: 8px;
`;

export const Input = styled.input`
  width: 100%;
  background: #242839;
  border: 1px solid transparent;

  &:focus {
    border-color: #808496;
  }
`;
