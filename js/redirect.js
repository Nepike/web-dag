// redirect.js
(function() {
    var allowedDomains = ["nepike.github.io"];
    var currentDomain = window.location.hostname;

    if (allowedDomains.indexOf(currentDomain) !== -1) {
        window.location.replace("https://quantmat.lebedev.ru");
    }
})();
