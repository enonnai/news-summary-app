(function() {
  console.log('Article')

  console.log('Test 1 " Test for instantiation of Article"')
  var art = new Article("This is the first article");
  assert.isConstructedFrom(art, Article);
  console.log('Test 2: Test for existing article')
  assert.isEqual(art.newArticle, "This is the first article");
})();
