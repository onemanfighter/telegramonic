import { renderHook } from '@testing-library/react';
import { appStore } from '../appStore';

describe('appStore', () => {
  it('should have all the slices', () => {
    const { result } = renderHook(() => appStore((state) => state));

    expect(result.current).toMatchSnapshot();
    expect(result.current.Alert).toBeDefined();
    expect(result.current.Drawer).toBeDefined();
    expect(result.current.Modal).toBeDefined();
  });
});
