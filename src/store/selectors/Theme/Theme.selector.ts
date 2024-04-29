import { AppStoreState } from '../../appStore/types';

export const themeSelector = (state: AppStoreState) => ({
  theme: state.Theme.themeValue,
  setTheme: state.Theme.setTheme,
});
