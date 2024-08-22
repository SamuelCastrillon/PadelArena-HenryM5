export interface IMenuReusableData {}

export interface IMenuReusableStatus {
  menuStatus: boolean;
}

export interface IButtonUserMenu {
  children: React.ReactNode;
  text: string;
  routeNavigate?: string;
}
