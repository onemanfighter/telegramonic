import { StateCreator } from 'zustand';
import { AlertStateSlice, DrawerStateSlice, ModalStateSlice } from '../slice';

export interface AppStoreState {
  Alert: AlertStateSlice;
  Modal: ModalStateSlice;
  Drawer: DrawerStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
