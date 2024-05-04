import { AlertComponentState, DrawerState, appStore } from '@store';
import { act, renderHook } from '@testing-library/react';
import { drawerSelector } from '../Drawer.selector';

jest.useFakeTimers();

describe('Drawer selector', () => {
  const onDrawerCloseMock = jest.fn();
  const drawerData: DrawerState['drawerData'] = {
    title: 'title',
    isOpen: true,
    children: <div>children </div>,
    footer: <div>footer </div>,
    onModalClose: onDrawerCloseMock,
  };
  it('should return drawer selector state and actions', () => {
    const drawer = renderHook(() => appStore(drawerSelector)).result.current;

    expect(drawer).toMatchSnapshot();
  });

  it('should return alert state with initial value', () => {
    const { result } = renderHook(() => appStore(drawerSelector));

    expect(result.current.drawerData).toMatchSnapshot();
  });

  it('should return drawer state on drawer data set using openDrawer', () => {
    const { result } = renderHook(() => appStore(drawerSelector));

    act(() => {
      result.current.openDrawer(drawerData);
    });

    expect(result.current.drawerData).toMatchSnapshot();
  });

  it('should reset and close drawer state on drawer data set using closeDrawer', () => {
    const { result } = renderHook(() => appStore(drawerSelector));

    act(() => {
      result.current.openDrawer(drawerData);
    });
    expect(result.current.drawerData.isOpen).toBeTruthy();

    act(() => {
      result.current.closeDrawer();
      jest.runAllTimers();
    });

    expect(result.current.drawerData.title).toEqual('');
    expect(result.current.drawerData.isOpen).toBeFalsy();
  });
});
