// https://stackoverflow.com/a/38815760
export const isBrowser = typeof window !== 'undefined'
    && ({}).toString.call(window) === '[object Window]';
export const isNode = typeof global !== "undefined"
    && ({}).toString.call(global) === '[object global]';
