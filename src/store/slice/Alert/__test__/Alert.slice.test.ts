import { AlertComponentState, appStore } from '@store';
import { act, renderHook } from '@testing-library/react';

jest.useFakeTimers();

describe('Alert slice', () => {
  const alertData: AlertComponentState = {
    description: 'description',
    showIcon: false,
    title: 'title',
    status: 'success',
    variant: 'solid',
  };
  it('should return alert state', () => {
    const alertState = renderHook(() => appStore()).result.current;

    expect(alertState).toMatchSnapshot();
  });

  it('should return alert state with initial value', () => {
    const alertState = renderHook(() => appStore()).result.current;

    expect(alertState.Alert.alert).toEqual({
      description: '',
      showIcon: true,
      title: '',
      status: undefined,
      variant: 'subtle',
    });
  });

  it('should return alert state on alert data set using setAlertStateData', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Alert.setAlertStateData(alertData);
    });

    expect(result.current.Alert.alert).toMatchSnapshot();
  });

  it('setAlertVisible should update the visible state of the alert state', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Alert.setAlertVisible(true);
    });

    expect(result.current.Alert.alertVisibleState).toBeTruthy();

    act(() => {
      result.current.Alert.setAlertVisible(false);
    });

    expect(result.current.Alert.alertVisibleState).toBeFalsy();
  });
});
