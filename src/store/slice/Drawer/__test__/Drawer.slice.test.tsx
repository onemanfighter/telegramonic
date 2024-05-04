import { AlertComponentState, DrawerState, appStore } from '@store';
import { act, renderHook } from '@testing-library/react';

jest.useFakeTimers();

describe('Drawer slice', () => {
  const onDrawerCloseMock = jest.fn();
  const drawerData: DrawerState['drawerData'] = {
    title: 'title',
    isOpen: true,
    children: <div>children </div>,
    footer: <div>footer </div>,
    onModalClose: onDrawerCloseMock,
  };

  it('should return drawer selector state and actions', () => {
    const drawer = renderHook(() => appStore()).result.current;

    expect(drawer).toMatchSnapshot();
  });

  it('should return drawer state with initial value', () => {
    const { result } = renderHook(() => appStore());

    expect(result.current.Drawer.drawerData).toMatchSnapshot();
  });

  it('should return drawer state on drawer data set using openDrawer', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Drawer.openDrawer(drawerData);
    });

    expect(result.current.Drawer.drawerData).toMatchSnapshot();
  });

  it('should reset and close drawer state on drawer data set using closeDrawer', () => {
    const { result } = renderHook(() => appStore());

    act(() => {
      result.current.Drawer.openDrawer(drawerData);
    });
    expect(result.current.Drawer.drawerData.isOpen).toBeTruthy();

    act(() => {
      result.current.Drawer.closeDrawer();
      jest.runAllTimers();
    });

    const { isOpen, title } = result.current.Drawer.drawerData;
    expect(title).toEqual('');
    expect(isOpen).toBeFalsy();
  });
});
