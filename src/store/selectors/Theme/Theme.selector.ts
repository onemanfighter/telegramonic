import { AppStoreState } from '../../appStore/types';

export const themeSelector = (state: AppStoreState) => ({
  themeValue: state.Theme.themeValue,
  setTheme: state.Theme.setTheme,
});
