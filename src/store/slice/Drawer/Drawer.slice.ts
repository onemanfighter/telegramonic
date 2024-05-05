import { AppStoreSlice } from '../../appStore/types';
import { DrawerState, DrawerStateSlice, DrawerOpenState } from './types';

const initialAlertState: DrawerState = {
  drawerData: {
    isOpen: false,
    title: '',
    children: null,
    footer: null,
    onModalClose: () => {},
  },
  openState: DrawerOpenState.CLOSE,
};

const createDrawerSlice: AppStoreSlice<DrawerStateSlice> = (set) => ({
  ...initialAlertState,
  openDrawer: (modalData) => {
    set((state) => {
      state.Drawer.drawerData = modalData;
      state.Drawer.openState = DrawerOpenState.OPEN;
    });
  },
  closeDrawer: () => {
    set((state) => {
      state.Drawer.openState = DrawerOpenState.CLOSE;
    });

    setTimeout(() => {
      set((state) => {
        state.Drawer.drawerData = initialAlertState.drawerData;
      });
    }, 500 /* 0.5s */);
  },
});

export default createDrawerSlice;
