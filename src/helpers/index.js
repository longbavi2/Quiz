export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 60 * 24 * 1000))
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}
export function getCookie(cname) {
    let name = cname + "=";
    let c = document.cookie.split(";");
    for (let i = 0; i < c.length; ++i) {
        let d = c[i]
        while (d.charAt(0) == ' ') {
            d = d.substring(1)
        }
        if (d.indexOf(name) == 0) {
            return d.substring(name.length)
        }
    }
}
export function deleteAllCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}