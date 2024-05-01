export type NavigationProps = {};

export type NavigationButton = {
  subNavigations?: SubNavigation[];
  titleStringKey: string;
  icon: string;
  path: string;
};

export type SubNavigation = {
  titleStringKey: string;
  path: string;
  count?: number;
};
