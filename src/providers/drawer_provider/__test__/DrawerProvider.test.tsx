import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import { AlertSelector, drawerSelector, useShallow } from '@selectors';
import { AlertComponentState, DrawerState, appStore } from '@store';
import DrawerProvider from '../DrawerProvider';

jest.useFakeTimers();

describe('DrawerProvider', () => {
  const onModalCloseMock = jest.fn();

  const drawerState: DrawerState['drawerData'] = {
    isOpen: false,
    title: 'Drawer',
    children: <div>Footer</div>,
    footer: <div>Footer</div>,
    onModalClose: onModalCloseMock,
  };
  beforeEach(() => {
    onModalCloseMock.mockClear();
  });

  it('should render children', () => {
    const { container } = render(
      <DrawerProvider>
        <div>child</div>
      </DrawerProvider>,
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('child')).toBeDefined();
  });

  it('should open drawer component on calling open drawer with drawer state', () => {
    const { result } = renderHook(() => appStore(useShallow(drawerSelector)));
    const { container } = render(
      <DrawerProvider>
        <div>child</div>
      </DrawerProvider>,
    );

    act(() => {
      result.current.openDrawer(drawerState);
    });

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Drawer')).toBeDefined();
  });

  it.skip('should hide the drawer on clicking close button', async () => {
    const { result } = renderHook(() => appStore(useShallow(AlertSelector)));
    const { container } = render(
      <DrawerProvider>
        <div>child</div>
      </DrawerProvider>,
    );

    fireEvent.click(screen.getByLabelText('close-button'));

    act(async () => {
      jest.runAllTimers();
    });

    expect(onModalCloseMock).toHaveBeenCalledTimes(1);

    expect(container).toMatchSnapshot();
    expect(screen.queryByText('Drawer')).toBeNull();
  });
});
