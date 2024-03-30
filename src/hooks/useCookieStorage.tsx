import { getCookie, setCookie, removeCookie } from "typescript-cookie";

const useCookieStorage = () => {
  const getData = (key: string) => {
    const data = getCookie(key);
    return data ? JSON.parse(data) : null;
  };

  const saveData = (
    key: string,
    initialValue: any,
    expires?: 7,
    path?: string
  ) => {
    setCookie(key, JSON.stringify(initialValue), { expires, path });
  };

  const removeData = (key: string) => {
    removeCookie(key);
  };

  return { getData, saveData, removeData };
};

export default useCookieStorage;
