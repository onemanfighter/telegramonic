import { AppStoreSlice } from '../../appStore/types';
import { Theme, ThemeStateSlice, ThemeState } from './types';

const initialTheme: ThemeState = {
  themeValue: Theme.LIGHT,
};

const createThemeSlice: AppStoreSlice<ThemeStateSlice> = (set) => ({
  ...initialTheme,
  setTheme: (theme: Theme) =>
    set((state) => {
      state.Theme.themeValue = theme;
    }),
});

export default createThemeSlice;
