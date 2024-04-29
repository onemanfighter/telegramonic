import { lazy } from 'react';
import { LazyComponentProvider } from '@providers';

const AboutUs = lazy(() => import('@screens/static/about_us/AboutUs'));
const ContactUs = lazy(() => import('@screens/static/contact_us/ContactUs'));
const FeatureMedia = lazy(
  () => import('@screens/static/feature_media/FeatureMedia'),
);
const PrivacyPolicy = lazy(
  () => import('@screens/static/privacy_policy/PrivacyPolicy'),
);

const LazyAboutUsScreen = () => {
  return (
    <LazyComponentProvider>
      <AboutUs />
    </LazyComponentProvider>
  );
};

const LazyContactUsScreen = () => {
  return (
    <LazyComponentProvider>
      <ContactUs />
    </LazyComponentProvider>
  );
};

const LazyFeatureMediaScreen = () => {
  return (
    <LazyComponentProvider>
      <FeatureMedia />
    </LazyComponentProvider>
  );
};

const LazyPrivacyPolicyScreen = () => {
  return (
    <LazyComponentProvider>
      <PrivacyPolicy />
    </LazyComponentProvider>
  );
};

export {
  LazyAboutUsScreen,
  LazyContactUsScreen,
  LazyFeatureMediaScreen,
  LazyPrivacyPolicyScreen,
};
