import { AlertComponentState, appStore } from '@store';
import { act, renderHook } from '@testing-library/react';
import { AlertSelector } from '../Alert.selector';

jest.useFakeTimers();

describe('Alert selector', () => {
  const alertData: AlertComponentState = {
    description: 'description',
    showIcon: false,
    title: 'title',
    status: 'success',
    variant: 'solid',
  };
  it('should return alert selector', () => {
    const alertSelector = renderHook(() => appStore(AlertSelector)).result
      .current;

    expect(alertSelector).toMatchSnapshot();
  });

  it('should return alert state with initial value', () => {
    const alertSelector = renderHook(() => appStore(AlertSelector)).result
      .current;

    expect(alertSelector.alert).toEqual({
      description: '',
      showIcon: true,
      title: '',
      status: undefined,
      variant: 'subtle',
    });
  });

  it('should return alert state on alert data set using setAlertStateData', () => {
    const { result } = renderHook(() => appStore(AlertSelector));

    act(() => {
      result.current.setAlertStateData(alertData);
    });

    expect(result.current.alert).toMatchSnapshot();
  });

  it('setAlertVisible should update the visible state of the alert state', () => {
    const { result } = renderHook(() => appStore(AlertSelector));

    act(() => {
      result.current.setAlertVisible(true);
    });

    expect(result.current.visible).toBeTruthy();

    act(() => {
      result.current.setAlertVisible(false);
    });

    expect(result.current.visible).toBeFalsy();
  });

  it('showAlertForTime should set alert data and show the modal for given time', () => {
    const { result } = renderHook(() => appStore(AlertSelector));

    act(() => {
      result.current.showAlertForTime(alertData, 1000);
    });

    expect(result.current.alert).toEqual(alertData);
    expect(result.current.visible).toBeTruthy();

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current.visible).toBeFalsy();
  });
});
