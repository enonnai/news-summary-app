(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
  httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', "https://content.guardianapis.com/search?api-key=" + guardianApiKey);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var guardian = JSON.parse(httpRequest.responseText);
        console.log(guardian);
        var articles = guardian.response.results;
        console.log(articles);
        parent = document.getElementById('app');
        for (var i = 0; i < articles.length; i++) {
          var article = document.createElement("div");
          article.innerHTML = "<li>" + articles[i].webTitle + "</li>" + "<br>";
          parent.appendChild(article);
      }

      var button = document.getElementById('ajaxButton');
      button.style.visibility = "hidden";

      } else {
        alert('There was a problem with the request.');
      }
    }
  }

})();
