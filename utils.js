'use strict';

export const setLocalStorage = (name, data) => globalThis.storage['set'](name, data);
export const getLocalStorage = (name) => globalThis.storage['get'](name);

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
