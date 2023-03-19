export interface IJWTUserDecoded {
  firstName: string;
  email: string;
  iat: number;
  exp: number;
}

export interface IAuthContext {
  isAuthenticated: boolean | null;
  user: IJWTUserDecoded | undefined;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

export enum IStatusCode {
  InvalidParams = 204,
  BadRequest = 400,
  InternalServerError = 500,
  None = 0,
}

export interface IErrorMessagesProps {
  [index: number]: {
    message: string;
  };
}

export interface IErrorContext {
  statusCode: number;
  setStatusCode(statusCode: number): void;
}

export interface IChildrenElement {
  children: React.ReactNode;
}
