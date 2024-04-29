import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import {
  LazyBlogsScreen,
  LazyBotsScreen,
  LazyChannelScreen,
  LazyGamesScreen,
  LazyGroupsScreen,
  LazyHomeScreen,
  LazyStickersScreen,
  LazyThemesScreen,
} from './lazy_screen';
import { MainScreen } from '@screens';

const publicRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<MainScreen />}>
      <Route path="" element={<Navigate to="/home" replace />} />
      <Route path="home" element={<LazyHomeScreen />} />
      <Route path="channels" element={<LazyChannelScreen />} />
      <Route path="groups" element={<LazyGroupsScreen />} />
      <Route path="sticker" element={<LazyStickersScreen />} />
      <Route path="bots" element={<LazyBotsScreen />} />
      <Route path="blogs" element={<LazyBlogsScreen />} />
      <Route path="themes" element={<LazyThemesScreen />} />
      <Route path="games" element={<LazyGamesScreen />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>,
  ),
);

export { publicRouter };
