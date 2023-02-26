import { createContext, type ReactNode, useContext } from 'react'

/*


  const Popper = (props) => {
    // Same idea as before, but now we also expose a setter method
    const { parentPopper, setPopper } = useNestedPoppers();

    return (
      <Popper
        // set context so nested poppers can see this parent
        onCreate={(instance) => setPopper(instance)}
        // hide all other poppers except our parent, if we have one
        onShow={() => hideAll({ exclude: parentPopper })}
        {...props}
      />);
  }


    credits https://www.aleksandrhovhannisyan.com/blog/react-context-nested-components/#using-context-to-detect-nested-components

*/

const InteractiveAncestryContext = createContext(false)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAncestor = () => useContext(InteractiveAncestryContext)

export const InteractiveAncestryProvider = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  const hasInteractiveParent = useAncestor()

  if (hasInteractiveParent) {
    throw new Error(
      `Invalid DOM: interactive elements cannot be nested in each other.`,
    )
  }

  return (
    <InteractiveAncestryContext.Provider value={true}>
      {children}
    </InteractiveAncestryContext.Provider>
  )
}
