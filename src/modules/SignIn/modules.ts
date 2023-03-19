interface ISignInModules {
  id: number;
  name: string;
  type: string;
  iconPath: string;
  altImage: string;
  placeholder?: string;
}

export const fields: ISignInModules[] = [
  {
    id: 1,
    name: "email",
    type: "email",
    iconPath: "/email.png",
    altImage: "Email",
    placeholder: "Entre com seu e-mail",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    iconPath: "/password.png",
    altImage: "Senha",
    placeholder: "Entre com sua senha",
  },
];
