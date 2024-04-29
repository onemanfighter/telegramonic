import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';

const StudyChannels = lazy(
  () => import('@screens/special/study_channels/StudyChannels'),
);
const Top = lazy(() => import('@screens/special/top/Top'));

const LazyStudyChannelsScreen = () => {
  return (
    <LazyComponentProvider>
      <StudyChannels />
    </LazyComponentProvider>
  );
};

const LazyTopScreen = () => {
  return (
    <LazyComponentProvider>
      <Top />
    </LazyComponentProvider>
  );
};

export { LazyStudyChannelsScreen, LazyTopScreen };
