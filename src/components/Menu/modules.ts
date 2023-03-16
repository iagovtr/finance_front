interface IMenuModules {
  id: number;
  title: string;
  iconPath: string;
  altImage: string;
  link: string;
}

export const menuModules: IMenuModules[] = [
  {
    id: 1,
    title: "Dashboard",
    iconPath: "/dashboard.png",
    altImage: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Faturas",
    iconPath: "/invoice.png",
    altImage: "Faturas",
    link: "/invoice",
  },
  {
    id: 3,
    title: "Configurações",
    iconPath: "/settings.png",
    altImage: "Configurações",
    link: "/setting",
  },
];
