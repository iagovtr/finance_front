import styled from "styled-components";
import { MENU_WIDTH } from "../../styles/Global";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  background: #131729;

  @media (min-width: 992px) {
    width: ${MENU_WIDTH};
  }
`;
