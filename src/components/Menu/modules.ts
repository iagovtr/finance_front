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
    iconPath: "/dashboard-gray.svg",
    altImage: "Dashboard",
    link: "/dashboard",
  },
];
