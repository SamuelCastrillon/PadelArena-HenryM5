export interface IMenuReusableData {}

export interface IMenuReusableStatus {
  menuStatus: boolean;
  handlerLogOut: () => void;
}

export interface IButtonUserMenu {
  children: React.ReactNode;
  text: string;
  routeNavigate: string;
  onClick?: () => void;
}
