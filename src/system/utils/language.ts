/*
    https://stackoverflow.com/a/21273362    
    will only match null or undefined, this won't match false
*/
export const not = (input: unknown): boolean => input == null
