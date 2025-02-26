import React, {
  lazy,
  Suspense,
  memo,
  ComponentType,
  FC,
  ComponentProps,
} from "react";
import Loader from "../components/common/Loader";

function lazyLoad<T extends ComponentType<any>>(
  importComponentFn: () => Promise<{ default: T }>
) {
  const LazyComponent = lazy(importComponentFn);

  const LazyLoadedComponent: FC<ComponentProps<T>> = memo((props) => (
    <Suspense fallback={<Loader />}>
      <LazyComponent {...props} />
    </Suspense>
  ));

  return memo(LazyLoadedComponent);
}

export default lazyLoad;
