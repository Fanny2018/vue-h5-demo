export function dateFormat(value: any, formatString: string = 'yyyy-MM-dd') {
  if (value === undefined || value === null || value === '' || !value) return;

  function toDouble(n: number) {
    return n < 10 ? '0' + n : '' + n;
  }

  // 先把时间转成时间戳
  let reg = /\-/g;
  value = String(value).replace(reg, '/'); // 解决iphone NaN
  const date = new Date(value);
  date.setTime(date.getTime());

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return formatString.replace(/[yMdhms]+/g, (str: string) => {
    switch (str) {
      case 'yy':
        return toDouble(year % 100);
      case 'yyyy':
        return year + '';
      case 'M':
        return month + '';
      case 'MM':
        return toDouble(month);
      case 'd':
        return day + '';
      case 'dd':
        return toDouble(day);
      case 'h':
        return hours + '';
      case 'hh':
        return toDouble(hours);
      case 'm':
        return minutes + '';
      case 'mm':
        return toDouble(minutes);
      case 's':
        return seconds + '';
      case 'ss':
        return toDouble(seconds);
      default:
        return str;
    }
  });
}

// 获取N天内日期   0：当天    -7：7天前   7：7天后
export function getDay(day: number = 0) {
  function toDouble(n: number) {
    return n < 10 ? '0' + n : '' + n;
  }

  let today = new Date();
  let milliSeconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(milliSeconds);

  const tYear = today.getFullYear();
  const tMonth = today.getMonth() + 1;
  const tDate = today.getDate();
  return tYear + '-' + toDouble(tMonth) + '-' + toDouble(tDate);
}

// 给最后日期添加时分秒
export function addHms(value: any, position: string = 'end') {
  if (!value && value && value === undefined && value === null) return;
  value = dateFormat(value);
  const hms = position === 'start' ? ' 00:00:00' : ' 23:59:59';
  return value + hms;
}
