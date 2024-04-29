import { StateCreator } from 'zustand';
import { AlertStateSlice, ThemeStateSlice } from '../slice';

export interface AppStoreState {
  Theme: ThemeStateSlice;
  Alert: AlertStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
