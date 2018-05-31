export const isIE = !!window['ActiveXObject'] || 'ActiveXObject' in window;
export const isIE9 = /msie 9\.0/i.test(navigator.userAgent);
export const isIE10 = /msie 10\.0/i.test(navigator.userAgent);
export const isIE11 = isIE && !isIE9 && !isIE10;
