(function(exports) {
 function GuardianApiRequest() {
    const api = './key'
    this.articlesUrl = "http://content.guardianapis.com/search?page-size=5&api-key=" + api;
  };
 GuardianApiRequest.prototype.createRequestUrl = function() {
    return this.articlesUrl;
  };
 exports.GuardianApiRequest = GuardianApiRequest;
})(this);
