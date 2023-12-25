import { Suspense } from "react";
import PageLoadingComponent from "./PageLoadingComponent";

/**
 * Proptypes for the lazy component provider.
 */
export interface ILazyComponentProviderProps {
  children: any;
}

/**
 * Functional component for the lazy component provider.
 *
 * @returns Ui component for the lazy component provider.
 */
export default function LazyComponentProvider(
  props: ILazyComponentProviderProps
) {
  return (
    <Suspense fallback={<PageLoadingComponent />}>{props.children}</Suspense>
  );
}
