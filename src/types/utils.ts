export interface BreadcrumbType {
  title: string;
  link: string;
}

export interface MenuItemType {
  title: string;
  link?: string;
  icon?: JSX.Element;
  children?: MenuItemType[];
  isOpen?: boolean;
}