export const saveOnSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const getOnSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

export const removeOnSessionStorage = (key: string) => {
  return sessionStorage.removeItem(key);
};
