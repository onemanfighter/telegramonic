import { StateCreator } from 'zustand';
import {
  AlertStateSlice,
  DrawerStateSlice,
  ModalStateSlice,
  ThemeStateSlice,
} from '../slice';

export interface AppStoreState {
  Theme: ThemeStateSlice;
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
