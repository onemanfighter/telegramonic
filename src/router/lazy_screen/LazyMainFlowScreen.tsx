import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';

const Blogs = lazy(() => import('@screens/main_flow/blogs/Blogs'));
const Bots = lazy(() => import('@screens/main_flow/bots/Bots'));
const Channel = lazy(() => import('@screens/main_flow/channel/Channel'));
const Games = lazy(() => import('@screens/main_flow/games/Games'));
const Groups = lazy(() => import('@screens/main_flow/groups/Groups'));
const Home = lazy(() => import('@screens/main_flow/home/Home'));
const Stickers = lazy(() => import('@screens/main_flow/stickers/Stickers'));
const Themes = lazy(() => import('@screens/main_flow/themes/Themes'));
const Search = lazy(() => import('@screens/main_flow/search/Search'));

const LazyBlogsScreen = () => {
  return (
    <LazyComponentProvider>
      <Blogs />
    </LazyComponentProvider>
  );
};

const LazyBotsScreen = () => {
  return (
    <LazyComponentProvider>
      <Bots />
    </LazyComponentProvider>
  );
};

const LazyChannelScreen = () => {
  return (
    <LazyComponentProvider>
      <Channel />
    </LazyComponentProvider>
  );
};

const LazyGamesScreen = () => {
  return (
    <LazyComponentProvider>
      <Games />
    </LazyComponentProvider>
  );
};

const LazyGroupsScreen = () => {
  return (
    <LazyComponentProvider>
      <Groups />
    </LazyComponentProvider>
  );
};

const LazyHomeScreen = () => {
  return (
    <LazyComponentProvider>
      <Home />
    </LazyComponentProvider>
  );
};

const LazyStickersScreen = () => {
  return (
    <LazyComponentProvider>
      <Stickers />
    </LazyComponentProvider>
  );
};

const LazyThemesScreen = () => {
  return (
    <LazyComponentProvider>
      <Themes />
    </LazyComponentProvider>
  );
};

const LazySearchScreen = () => {
  return (
    <LazyComponentProvider>
      <Search />
    </LazyComponentProvider>
  );
};

export {
  LazyBlogsScreen,
  LazyBotsScreen,
  LazyChannelScreen,
  LazyGamesScreen,
  LazyGroupsScreen,
  LazyHomeScreen,
  LazyStickersScreen,
  LazyThemesScreen,
  LazySearchScreen,
};
