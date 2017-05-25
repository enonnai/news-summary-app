const api = './key'
guardian.open=('GET','http://content.guardianapis.com/search?page-size=5&api-key=' + api, false);
guardian.onload = loadedFunction;
guardian.send();
console.log(this);
