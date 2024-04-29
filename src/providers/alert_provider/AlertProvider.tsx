import { AlertComponent } from '@components';
import { appStore } from '@store';
import { AlertSelector, useShallow } from '@selectors';

import { AlertProviderProps } from './types';

const AlertProvider = ({ children }: AlertProviderProps) => {
  const { alert, visible } = appStore(useShallow(AlertSelector));

  return (
    <>
      {visible && <AlertComponent {...alert} />}
      {children}
    </>
  );
};

export default AlertProvider;
