import { AppStoreState } from '@store';

const drawerSelector = (state: AppStoreState) => ({
  openState: state.Drawer.openState,
  drawerData: state.Drawer.drawerData,
  openDrawer: state.Drawer.openDrawer,
  closeDrawer: state.Drawer.closeDrawer,
});

export { drawerSelector };
