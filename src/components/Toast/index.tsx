import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { errorMessages } from "../../contexts/ErrorContext";
import useError from "../../hooks/useError";
import * as S from "./styles";

const Toast = () => {
  const { statusCode } = useError();

  if (statusCode === 0) {
    return null;
  }

  return createPortal(
    <S.ToastContainer>
      <S.CloseIconContainer>
        <S.CloseIcon src="/close.png" alt="Fechar" />
      </S.CloseIconContainer>
      <S.MessageContainer>
        <img src="/error.png" alt="Erro" />
        <S.Message>{errorMessages[statusCode].message}</S.Message>
      </S.MessageContainer>
    </S.ToastContainer>,
    document.body
  );
};

export default Toast;
