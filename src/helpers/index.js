export function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime()+ (exdays*60*60*24*1000))
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}
export function getCookie(cname){
    var name = cname + "=";
    var c = document.cookie.split(";");
    for(var i = 0 ;i< c.length ;++i){
        var d = c[i]
        while(d.charAt(0) ==' '){
            d = d.substring(1)
        }
        if(d.indexOf(name) == 0){
            return d.substring(name.length)
        }
    }
}
export function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }