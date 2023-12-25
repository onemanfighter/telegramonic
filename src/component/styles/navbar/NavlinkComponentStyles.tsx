export const NavigationCommonStyle: string =
  " w-full text-center text-md shadow-md w-full p-2 xl:m-3 m-1 rounded-md ";
const NavigationExtraActiveStyle: string =
  " text-white bg-gradient-to-r hover:bg-blue-200 from-blue-400 to-violet-600 transition-all";
const NavigationExtraInactiveStyle: string =
  " hover:text-white bg-blue-200 hover:bg-gradient-to-r from-blue-400 to-violet-600 transition-all";

/**
 * Navigation bar active style.
 */
export const NavigationActiveStyle: string =
  NavigationCommonStyle + NavigationExtraActiveStyle;

/**
 * Navigation bar inactive style.
 */
export const NavigationInactiveStyle: string =
  NavigationCommonStyle + NavigationExtraInactiveStyle;
