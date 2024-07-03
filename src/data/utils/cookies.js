import { getConfig } from '@edx/frontend-platform';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setCookie = (cookieName, cookieValue, cookieExpiry) => {
  if (cookieName) { // To avoid setting getting exception when setting cookie with undefined names.
    
    //const options = { domain: getConfig().SESSION_COOKIE_DOMAIN, path: '/' };
    const options = { domain: 'apps.local.edly.io', path: '/' };
    if (cookieExpiry) {
      options.expires = cookieExpiry;
    }
    cookies.set(cookieName, cookieValue, options);

  }
}
export const getCookie = (cookieName) => {
  if(cookieName) {
    
    if(cookies.get(cookieName))
      return cookies.get(cookieName);
  }
  return '';
};

export const removeCookie = (cookieName) => {
  if(cookieName) {
    cookies.remove(cookieName);
  }
}
