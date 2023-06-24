import { useState, useEffect, type RefObject } from 'react'

/*
import React, { useRef } from 'react';

function MyComponent() {
  const targetElementRef = useRef(null);
  const isFocused = useFocusWithin(targetElementRef);

  return (
    <div>
      <div ref={targetElementRef} tabIndex={-1} style={{ border: isFocused ? '2px solid blue' : '2px solid black' }}>
        <input type="text" placeholder="Input inside target element" />
      </div>
      <input type="text" placeholder="Input outside target element" />
      <p>Is focus within target element? {isFocused ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default MyComponent;

*/

function useFocusWithin<T>(elementRef: RefObject<T>): boolean {
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const checkFocus = () => {
      const element = elementRef?.current as HTMLElement
      if (element != null) {
        setIsFocused(element.contains(document.activeElement))
      }
    }

    document.addEventListener('focus', checkFocus, true)
    document.addEventListener('blur', checkFocus, true)

    return () => {
      document.removeEventListener('focus', checkFocus, true)
      document.removeEventListener('blur', checkFocus, true)
    }
  }, [elementRef])

  return isFocused
}

export default useFocusWithin
