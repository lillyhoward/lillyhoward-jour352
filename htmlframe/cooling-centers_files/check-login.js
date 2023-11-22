(function() {
    var app_domain = location.hostname.replace('www-stg.', 'app.').replace('www.', 'app.');
    var api_domain = location.hostname.replace('www-stg.', 'api.').replace('www.', 'api.');
    fixCookie();
    checkLogin();
    var newUrl = '//' + app_domain + '/';
    var loginLinkButton = document.querySelector('[data-login-link-button]');
    loginLinkButton.setAttribute('href', newUrl);
    var loginLinkText = document.querySelector('[data-login-link-text]');
    if (loginLinkText) {
        loginLinkText.setAttribute('href', newUrl);
    }

    function fixCookie() {
        var cookie = document.cookie;
        var cookie_domain = location.hostname.replace('www.datawrapper', '.datawrapper');
        var dw_session = cookie
            .split(';')
            .filter(function(d) {
                return d.trim().split('=')[0] === 'DW-SESSION';
            })
            .map(function(d) {
                return d.trim().split('=')[1];
            })[0];
        if (dw_session) {
            var nextYear = new Date();
            nextYear.setMonth(nextYear.getMonth() + 12);
            document.cookie =
                'DW-SESSION=' +
                dw_session +
                ';expires=' +
                nextYear +
                ';domain=' +
                cookie_domain +
                ';path=/';
        }
    }

    function checkLogin() {
        fetch('//' + api_domain + '/v3/me', { credentials: 'include' })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                if (data && data.id && data.role !== 'guest') {
                    loginLinkButton.innerHTML = 'Dashboard';
                    if (loginLinkText) {
                        loginLinkText.innerHTML = 'go to Dashboard';
                    }
                }
            })
    }
})();
