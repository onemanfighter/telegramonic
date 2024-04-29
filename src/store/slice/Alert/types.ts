export type AlertComponentState = {
  title: string;
  description: string;
  showIcon?: boolean;
  status?: 'error' | 'success' | 'warning' | 'info' | 'loading' | undefined;
  variant?: 'solid' | 'subtle' | 'left-accent' | 'top-accent';
};

export type AlertState = {
  alertVisibleState: boolean;
  alert: AlertComponentState;
};

export interface AlertStateAction {
  setAlertVisible: (visible: boolean) => void;
  setAlertStateData: (data: AlertComponentState) => void;
}

export type AlertStateSlice = AlertState & AlertStateAction;
