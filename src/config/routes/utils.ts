/**
 *  will fail:
 * const { Export1, Export2 } = lazy(() => import('path/to/component'));
 * https://github.com/facebook/react/issues/14603
 * One workaround is to re-export those modules as default exports from an intermediate module.
 */
export const importNamed = async (componentPath: string) =>
  await import(componentPath).then(comp => ({ default: comp.default }))
