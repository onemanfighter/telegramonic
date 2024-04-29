import { AppStoreSlice } from '../../appStore/types';
import { AlertState, AlertStateSlice } from './types';

const initialAlertState: AlertState = {
  alertVisibleState: false,
  alert: {
    title: '',
    description: '',
    showIcon: true,
    status: undefined,
    variant: 'subtle',
  },
};

const createAlertSlice: AppStoreSlice<AlertStateSlice> = (set) => ({
  ...initialAlertState,
  setAlertVisible: (visible) => {
    set((state) => {
      state.Alert.alertVisibleState = visible;
    });
  },
  setAlertStateData: (data) => {
    set((state) => {
      state.Alert.alert = data;
    });
  },
});

export default createAlertSlice;
