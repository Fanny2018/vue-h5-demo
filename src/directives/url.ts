// 获取地址栏上指定参数值
export function getUrl(name: string) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 获取cookie
export function getCooke(name: string) {
    let reg = new RegExp("(^|/)" + name + "=([^&]*)(&|$)");
    let r = document.cookie.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
