import { StateCreator } from 'zustand';
import { AlertStateSlice, ModalStateSlice, ThemeStateSlice } from '../slice';

export interface AppStoreState {
  Theme: ThemeStateSlice;
  Alert: AlertStateSlice;
  Modal: ModalStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
