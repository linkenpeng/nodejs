(function($){
    function isValidKey(key){
        return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(key)
    }

    function getCookieRaw(key) {
        if (isValidKey(key)) {
            var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"),
                result = reg.exec(document.cookie);

            if (result) {
                return result[2] || null;
            }
        }

        return null;
    }

    function getCookie(key) {
        var value = getCookieRaw(key);
        if ('string' == typeof value) {
            value = decodeURIComponent(value);
            return value;
        }
        return null;
    }

    function setCookieRaw(key, value, options) {
        if (!isValidKey(key)) {
            return;
        }

        options = options || {};
        
        // 计算cookie过期时间
        var expires = options.expires;
        if ('number' == typeof options.expires) {
            expires = new Date();
            expires.setTime(expires.getTime() + options.expires);
        }

        document.cookie =
            key + "=" + value
                + (options.path ? "; path=" + options.path : "")
                + (expires ? "; expires=" + expires.toGMTString() : "")
                + (options.domain ? "; domain=" + options.domain : "")
                + (options.secure ? "; secure" : '');
    }

    function setCookie(key, value, options) {
        setCookieRaw(key, encodeURIComponent(value), options);
    }

    function delCookie(key, options) {
        options = options || {};
        options.expires = new Date(0);
        setCookieRaw(key, '', options);
    }

    $.extend({
        getCookie: getCookie,
        getCookieRaw: getCookieRaw,
        setCookie: setCookie,
        setCookieRaw: setCookieRaw,
        delCookie: delCookie
    });
})(jQuery);