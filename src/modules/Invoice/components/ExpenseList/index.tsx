import React, { Fragment, useContext } from "react";
import InvoiceContext from "../../../../contexts/InvoiceContext";
import * as S from "./styles";
import { columns } from "./tableProperties";
import RemoveIcon from "/remove.png";

const ExpenseList = () => {
  const { allExpenses } = useContext(InvoiceContext);

  return (
    <S.ExpenseListContainer>
      <S.OptionContainer>
        <S.TitleContainer>
          <S.Title>Todos os gastos</S.Title>
        </S.TitleContainer>
        <S.ButtonContainer>
          <S.Button className="new">Novo gasto</S.Button>
          <S.Button>...</S.Button>
        </S.ButtonContainer>
      </S.OptionContainer>
      <S.Table>
        <tbody>
          <tr>
            {columns.map((column) => (
              <S.TableColumns key={column}>{column}</S.TableColumns>
            ))}
          </tr>
          {allExpenses.map((expense) => (
            <S.TableRowsWrapper key={expense.ExpenseID}>
              <S.TableRows>{expense.Title}</S.TableRows>
              <S.TableRows>{expense.SubCategory}</S.TableRows>
              <S.TableRows>R$ {expense.ExpenseValue}</S.TableRows>
              <S.TableRows>{expense.ExpenseDate}</S.TableRows>
              <S.TableRows>{expense.Surname}</S.TableRows>
              <S.TableRows className="center">
                {expense.Installments}
              </S.TableRows>
              <S.TableRows>
                <S.RemoveIcon src={RemoveIcon} alt="Excluir" />
              </S.TableRows>
            </S.TableRowsWrapper>
          ))}
        </tbody>
      </S.Table>
    </S.ExpenseListContainer>
  );
};

export default ExpenseList;
