import { act, render, renderHook, screen } from '@testing-library/react';
import AlertProvider from '../AlertProvider';
import { AlertSelector, useShallow } from '@selectors';
import { AlertComponentState, appStore } from '@store';

jest.useFakeTimers();

describe('AlertProvider', () => {
  const alertComponentState: AlertComponentState = {
    title: 'Title',
    description: 'Description',
    showIcon: true,
    status: 'success',
    variant: 'solid',
  };

  it('should render children', () => {
    const { container } = render(
      <AlertProvider>
        <div>child</div>
      </AlertProvider>,
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText('child')).toBeDefined();
  });

  it('should open alert component on setting visible state to true', () => {
    const { result } = renderHook(() => appStore(useShallow(AlertSelector)));
    const { container } = render(
      <AlertProvider>
        <div>child</div>
      </AlertProvider>,
    );

    act(() => {
      result.current.setAlertStateData(alertComponentState);
      result.current.setAlertVisible(true);
    });

    expect(container).toMatchSnapshot();
    expect(screen.getByText('child')).toBeDefined();
    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Description')).toBeDefined();
  });

  it('should show alert for the given time using showAlertForTime', () => {
    const { result } = renderHook(() => appStore(useShallow(AlertSelector)));
    const { container } = render(
      <AlertProvider>
        <div>child</div>
      </AlertProvider>,
    );

    act(() => {
      result.current.showAlertForTime(alertComponentState, 2000);
    });

    expect(container).toMatchSnapshot();
    expect(screen.getByText('child')).toBeDefined();
    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Description')).toBeDefined();

    act(() => {
      jest.runAllTimers();
    });

    expect(container).toMatchSnapshot();
    expect(screen.queryByText('Title')).toBeNull();
    expect(screen.queryByText('Description')).toBeNull();
  });
});
