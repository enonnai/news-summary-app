(function(exports) {
  var Headline = function() {
    this.headlines = []
  };

  Headline.prototype.listHeadline = function(article) {
    var article  = new Article(article);
    this.headlines.push(article);
  }

  exports.Headline = Headline;
})(this);
