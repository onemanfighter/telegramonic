import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { AppStoreState } from './types';
import {
  createThemeSlice,
  createAlertSlice,
  createModalSlice,
  createDrawerSlice,
} from '@store/slice';

export const appStore = create<AppStoreState>()(
  immer((...api) => ({
    Theme: createThemeSlice(...api),
    Alert: createAlertSlice(...api),
    Modal: createModalSlice(...api),
    Drawer: createDrawerSlice(...api),
  })),
);
