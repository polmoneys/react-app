## TLDR

These components should be used 'composed' into something else and not used directly.

Changes on `Core` components should be kept minimal, rather create a new variant out of it & add sugar to your needs on parent folder (hint: plural name).


A pattern that is not demo-ed is:

```tsx

import { Fragment, lazy, startTransition, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const pickerComponents = {
  day: lazy(() => import("./Day")),
  week: lazy(() => import("./Week")),
  month: lazy(() => import("./Month")),
  year: lazy(() => import("./Year"))
};

type Period = keyof typeof pickerComponents;

const ExpensiveComponentDemo = () => {

const [selectedPeriod, setSelectedPeriod] = useState<Period>("day");

const SelectedComponent = pickerComponents[selectedPeriod] ?? "marquee";

return(
    <Fragment>
        {/* 
            UI to change the period HERE 
            avoid 'fallback flash' with startTransition
            onChange={(e) =>
                startTransition(() => setSelectedPeriod(e.target.value))
            }
        */}
        <TimePicker type={selectedPeriod} />
    </Fragment>
)
}

function TimePicker({ type, ...props }) {
  const SelectedComponent = pickerComponents[type];

  return (
    <ErrorBoundary>
      <Suspense fallback="Loading component...">
        <SelectedComponent />
      </Suspense>
    </ErrorBoundary>
  );
} 

```
