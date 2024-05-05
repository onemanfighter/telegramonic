import { AlertComponentState, AlertState } from '@store/slice';
import { AppStoreState } from 'src/store/appStore';

const AlertSelector = (state: AppStoreState) => ({
  visible: state.Alert.alertVisibleState,
  alert: state.Alert.alert,
  setAlertStateData: state.Alert.setAlertStateData,
  setAlertVisible: state.Alert.setAlertVisible,
  // Show alert for a specific time in seconds
  showAlertForTime: (data: AlertComponentState, time: number) => {
    state.Alert.setAlertStateData(data);
    state.Alert.setAlertVisible(true);
    setTimeout(() => {
      state.Alert.setAlertVisible(false);
    }, time * 1000);
  },
});

export { AlertSelector };
