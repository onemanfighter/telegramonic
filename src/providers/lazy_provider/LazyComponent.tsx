import * as React from 'react';
import { LazyComponentProviderProps } from './types';

const LazyComponentProvider = (props: LazyComponentProviderProps) => {
  return <React.Suspense fallback={<></>}>{props.children}</React.Suspense>;
};

export default LazyComponentProvider;
