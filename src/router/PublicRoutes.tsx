import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import {
  LazyAboutUsScreen,
  LazyBlogsScreen,
  LazyBotsScreen,
  LazyChannelScreen,
  LazyContactUsScreen,
  LazyFeatureMediaScreen,
  LazyGamesScreen,
  LazyGroupsScreen,
  LazyHomeScreen,
  LazyPrivacyPolicyScreen,
  LazyStickersScreen,
  LazyThemesScreen,
} from './lazy_screen';
import { MainScreen } from '@screens';

const publicRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<MainScreen />}>
      {/* Main screen routes. */}
      <Route path="" element={<Navigate to="/home" replace />} />
      <Route path="home" element={<LazyHomeScreen />} />
      <Route path="channels" element={<LazyChannelScreen />} />
      <Route path="groups" element={<LazyGroupsScreen />} />
      <Route path="sticker" element={<LazyStickersScreen />} />
      <Route path="bots" element={<LazyBotsScreen />} />
      <Route path="blogs" element={<LazyBlogsScreen />} />
      <Route path="themes" element={<LazyThemesScreen />} />
      <Route path="games" element={<LazyGamesScreen />} />

      {/* Static screen routes. */}
      <Route path="about" element={<LazyAboutUsScreen />} />
      <Route path="contact" element={<LazyContactUsScreen />} />
      <Route path="feature" element={<LazyFeatureMediaScreen />} />
      <Route path="privacy" element={<LazyPrivacyPolicyScreen />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>,
  ),
);

export { publicRouter };
