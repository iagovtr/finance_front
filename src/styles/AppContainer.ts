import styled from "styled-components";
import { MENU_WIDTH } from "./Global";

export const AppContainer = styled.div`
  position: absolute;
  width: calc(100% - ${MENU_WIDTH});
  left: ${MENU_WIDTH};
  padding: 24px;
  top: 60px;
`;
