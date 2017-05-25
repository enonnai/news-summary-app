// (function() {
//     const api = './key'
//     var xhr = new XMLHttpRequest();
//
//     xhr.open('GET', 'http://content.guardianapis.com/search?page-size=5&api-key=', false);
//     xhr.send(null);
//     console.log(xhr.responseText);
// })()
(function() {

    curl "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key='./key'";

})();
