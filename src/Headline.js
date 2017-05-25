(function(exports) {
  var Headline = function() {
    this.headlines = []
  };

  Headline.prototype.listHeadline = function(article) {
    var article  = new Article(article);
    this.headlines.push(article);
  };

  Headline.prototype.displayHeadlines = function(article) {
    var article  = new Article(article);
    var display = "<ul>";
    this.headlines.forEach(function(article) {
      display += ("<li><div>" + article.newArticle+ "</div></li>");
    });
    return (display + "</ul>");
  };

  exports.Headline = Headline;
})(this);
