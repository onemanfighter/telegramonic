import { StateCreator } from 'zustand';
import { ThemeStateSlice } from '../slice';

export interface AppStoreState {
  Theme: ThemeStateSlice;
}

export type AppStoreSlice<T> = StateCreator<
  AppStoreState,
  [['zustand/immer', never]],
  [],
  T
>;
