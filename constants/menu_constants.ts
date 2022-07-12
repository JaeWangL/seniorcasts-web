export interface NavItem {
  labelKey: string;
  href?: string;
}

export const navMenuItems: NavItem[] = [
  {
    labelKey: 'menu.home',
    href: '/',
  },
  {
    labelKey: 'menu.classes',
    href: '/classes',
  },
];
