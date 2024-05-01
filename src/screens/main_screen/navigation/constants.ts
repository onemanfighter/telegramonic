import { NavigationButton, SubNavigation } from './types';

const CHANNEL_NAVS: SubNavigation[] = [
  {
    titleStringKey: 'Navigation.channels.animals',
    path: '/channels/animals',
    count: 15,
  },
  {
    titleStringKey: 'Navigation.channels.arts_photos',
    path: '/channels/arts_photos',
    count: 35,
  },
  {
    titleStringKey: 'Navigation.channels.auto',
    path: '/channels/auto',
    count: 22,
  },
  {
    titleStringKey: 'Navigation.channels.books',
    path: '/channels/books',
    count: 36,
  },
  {
    titleStringKey: 'Navigation.channels.adults',
    path: '/channels/adults',
    count: 52,
  },
  {
    titleStringKey: 'Navigation.channels.business',
    path: '/channels/business',
    count: 12,
  },
  {
    titleStringKey: 'Navigation.channels.celebrity',
    path: '/channels/celebrity',
    count: 40,
  },
  {
    titleStringKey: 'Navigation.channels.cryptocurrency',
    path: '/channels/cryptocurrency',
    count: 47,
  },
  {
    titleStringKey: 'Navigation.channels.education',
    path: '/channels/education',
    count: 38,
  },
  {
    titleStringKey: 'Navigation.channels.entertainment',
    path: '/channels/entertainment',
    count: 51,
  },
  {
    titleStringKey: 'Navigation.channels.fashion_beauty',
    path: '/channels/fashion_beauty',
  },
  {
    titleStringKey: 'Navigation.channels.beauty',
    path: '/channels/beauty',
    count: 36,
  },
  {
    titleStringKey: 'Navigation.channels.finance',
    path: '/channels/finance',
    count: 24,
  },
  {
    titleStringKey: 'Navigation.channels.food',
    path: '/channels/food',
  },
  {
    titleStringKey: 'Navigation.channels.health',
    path: '/channels/health',
    count: 27,
  },
  {
    titleStringKey: 'Navigation.channels.games',
    path: '/channels/games',
  },
  {
    titleStringKey: 'Navigation.channels.apps',
    path: '/channels/apps',
    count: 24,
  },
  {
    titleStringKey: 'Navigation.channels.jobs',
    path: '/channels/jobs',
    count: 15,
  },
  {
    titleStringKey: 'Navigation.channels.linguistics',
    path: '/channels/linguistics',
    count: 14,
  },
  {
    titleStringKey: 'Navigation.channels.love',
    path: '/channels/love',
    count: 16,
  },
  {
    titleStringKey: 'Navigation.channels.music',
    path: '/channels/music',
    count: 35,
  },
  {
    titleStringKey: 'Navigation.channels.news',
    path: '/channels/news',
    count: 44,
  },
  {
    titleStringKey: 'Navigation.channels.offers',
    path: '/channels/offers',
  },
  {
    titleStringKey: 'Navigation.channels.deals',
    path: '/channels/deals',
    count: 19,
  },
  {
    titleStringKey: 'Navigation.channels.others',
    path: '/channels/others',
    count: 15,
  },
  {
    titleStringKey: 'Navigation.channels.quotes',
    path: '/channels/quotes',
    count: 24,
  },
  {
    titleStringKey: 'Navigation.channels.science',
    path: '/channels/science',
    count: 16,
  },
  {
    titleStringKey: 'Navigation.channels.sports',
    path: '/channels/sports',
    count: 20,
  },
  {
    titleStringKey: 'Navigation.channels.technology',
    path: '/channels/technology',
    count: 22,
  },
  {
    titleStringKey: 'Navigation.channels.travel',
    path: '/channels/travel',
    count: 20,
  },
];

const GROUP_NAVS: SubNavigation[] = [
  {
    titleStringKey: 'Navigation.groups.animals',
    path: '/groups/animals',
    count: 5,
  },
  {
    titleStringKey: 'Navigation.groups.arts_photos',
    path: '/groups/arts_photos',
    count: 7,
  },
  {
    titleStringKey: 'Navigation.groups.crypto',
    path: '/groups/crypto',
    count: 9,
  },
  {
    titleStringKey: 'Navigation.groups.education',
    path: '/groups/education',
    count: 6,
  },
  {
    titleStringKey: 'Navigation.groups.adults',
    path: '/groups/adults',
    count: 8,
  },
  {
    titleStringKey: 'Navigation.groups.dating',
    path: '/groups/dating',
    count: 4,
  },
  {
    titleStringKey: 'Navigation.groups.developer',
    path: '/groups/developer',
    count: 10,
  },
  {
    titleStringKey: 'Navigation.groups.finance',
    path: '/groups/finance',
    count: 6,
  },
  {
    titleStringKey: 'Navigation.groups.food',
    path: '/groups/food',
    count: 3,
  },
  {
    titleStringKey: 'Navigation.groups.fun_chat',
    path: '/groups/fun_chat',
    count: 5,
  },
  {
    titleStringKey: 'Navigation.groups.games_apps',
    path: '/groups/games_apps',
    count: 6,
  },
  {
    titleStringKey: 'Navigation.groups.india',
    path: '/groups/india',
    count: 7,
  },
  {
    titleStringKey: 'Navigation.groups.jobs',
    path: '/groups/jobs',
    count: 4,
  },
  {
    titleStringKey: 'Navigation.groups.linguistics',
    path: '/groups/linguistics',
    count: 5,
  },
  {
    titleStringKey: 'Navigation.groups.marketing',
    path: '/groups/marketing',
    count: 3,
  },
  {
    titleStringKey: 'Navigation.groups.motivation',
    path: '/groups/motivation',
    count: 2,
  },
  {
    titleStringKey: 'Navigation.groups.music',
    path: '/groups/music',
    count: 3,
  },
  {
    titleStringKey: 'Navigation.groups.news',
    path: '/groups/news',
    count: 1,
  },
  {
    titleStringKey: 'Navigation.groups.official_crypto_groups',
    path: '/groups/official_crypto_groups',
    count: 5,
  },
  {
    titleStringKey: 'Navigation.groups.others',
    path: '/groups/others',
    count: 2,
  },
  {
    titleStringKey: 'Navigation.groups.sports',
    path: '/groups/sports',
    count: 4,
  },
  {
    titleStringKey: 'Navigation.groups.technology',
    path: '/groups/technology',
    count: 6,
  },
];

const NAVIGATION: NavigationButton[] = [
  {
    titleStringKey: 'Navigation.navButton.home',
    icon: 'home',
    path: '/home',
  },
  {
    titleStringKey: 'Navigation.navButton.channels',
    icon: 'channels',
    path: '/channels',
    subNavigations: CHANNEL_NAVS,
  },
  {
    titleStringKey: 'Navigation.navButton.groups',
    icon: 'groups',
    path: '/groups',
    subNavigations: GROUP_NAVS,
  },
  {
    titleStringKey: 'Navigation.navButton.stickers',
    icon: 'stickers',
    path: '/stickers',
  },
  {
    titleStringKey: 'Navigation.navButton.bots',
    icon: 'bots',
    path: '/bots',
  },
  {
    titleStringKey: 'Navigation.navButton.blogs',
    icon: 'blogs',
    path: '/blogs',
  },
  {
    titleStringKey: 'Navigation.navButton.themes',
    icon: 'themes',
    path: '/themes',
  },
  {
    titleStringKey: 'Navigation.navButton.games',
    icon: 'games',
    path: '/games',
  },
];

export { NAVIGATION };
