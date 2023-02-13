/*
    https://stackoverflow.com/a/21273362    
    will only match null or undefined, this won't match false
*/
export const not = (input: unknown): boolean => input == null

// https://codesandbox.io/s/functional-3-u6npz?file=/src/index.js
