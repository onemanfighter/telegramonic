export type DrawerData = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  onModalClose: () => void;
};

export type DrawerState = {
  drawerData: DrawerData;
  openState: DrawerOpenState;
};

export enum DrawerOpenState {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export interface DrawerStateAction {
  openDrawer: (drawerData: DrawerData) => void;
  closeDrawer: () => void;
}

export type DrawerStateSlice = DrawerState & DrawerStateAction;
