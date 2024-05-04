import { create } from 'zustand';

import { immer } from 'zustand/middleware/immer';
import { AppStoreState } from './types';
import {
  createAlertSlice,
  createModalSlice,
  createDrawerSlice,
} from '@store/slice';

export const appStore = create<AppStoreState>()(
  immer((...api) => ({
    Alert: createAlertSlice(...api),
    Modal: createModalSlice(...api),
    Drawer: createDrawerSlice(...api),
  })),
);
