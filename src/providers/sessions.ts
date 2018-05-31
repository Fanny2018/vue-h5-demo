// 设置cookie
export const setCookie = (name: string, value: string, days: number = 365) => {
  let time = new Date();
  time.setTime(time.getTime() + 24 * 60 * 60 * 1000 * days);
  window.document.cookie = name + '=' + escape(value) +
    ';path=/;expires=' + time.toDateString();
};

// 获取cookie
export const getCookie = (name: string) => {
  let reg = new RegExp('(^|;) ?' + name + '=([^;]*)(;|$)');
  let result = window.document.cookie.match(reg);
  return result ? result[2] : null;
};

// 清除cookie
export const clearCookie = (name: string) => {
  this.set(name, '', -1);
};


export const setLocalStorage = (key, value) => {
  if (!key) return;
  let val = value;
  if (typeof value !== 'string') {
    val = JSON.stringify(value);
  }
  window.localStorage.setItem(key, val);
};

export const getLocalStorage = (key) => {
  if (!key) return;
  return window.localStorage.getItem(key);
};

export const removeLocalStorage = (key) => {
  if (!key) return;
  window.localStorage.removeItem(key);
};

export const setSessionStorage = (key, value) => {
  if (!key) return;
  let val = value;
  if (typeof value !== 'string') {
    val = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, val);
};

export const getSessionStorage = (key) => {
  if (!key) return;
  return window.sessionStorage.getItem(key);
};

export const removeSessionStorage = (key) => {
  if (!key) return;
  window.sessionStorage.removeItem(key);
};

export const getKey = (info, key) => {
  if (!info) return;
  let reg = new RegExp('(^|;) ?' + key + '=([^;]*)(;|$)');
  let result = info.match(reg);
  return result ? result[2] : null;
};
