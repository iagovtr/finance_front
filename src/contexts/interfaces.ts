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

export interface IErrorContext {
  statusCode: number;
  setStatusCode(statusCode: number): void;
}

export interface IChildrenElement {
  children: React.ReactNode;
}
