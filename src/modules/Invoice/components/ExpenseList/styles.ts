import styled from "styled-components";

export const ExpenseListContainer = styled.div`
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div``;

export const Title = styled.p`
  font-weight: 600;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  min-width: 40px;
  padding: 0px 8px;
  background: transparent;
  border-color: #dcdcdc;
  font-size: 18px;

  &.new {
    background: #8055d9;
    border-color: #8055d9;
    font-size: 13px;
    color: #ffffff;
  }

  & + & {
    margin-left: 12px;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 36px;
`;

export const TableColumns = styled.td`
  font-weight: 600;
  font-size: 14px;
  color: #636573;
  margin-bottom: 10px;
  text-align: center;
`;

export const TableRowsWrapper = styled.tr``;

export const TableRows = styled.td`
  background: #ffffff;
  font-size: 14px;
  font-weight: 500;
  color: #363740;
  border-bottom: 0.657299px solid rgba(202, 202, 202, 0.45);
  padding: 12px 0px;
  text-align: center;
`;

export const RemoveIcon = styled.img`
  cursor: pointer;
`;
