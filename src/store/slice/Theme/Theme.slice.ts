import { AppStoreSlice } from '../../appStore/types';
import { Theme, ThemeStateSlice } from '@store';
import { ThemeState } from './types';

const THEME = 'theme';

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
