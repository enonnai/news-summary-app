(function() {
  console.log('Article')

  console.log('Test 1 " Test for instantiation of Article"')
  var art = new Article();
  assert.isConstructedFrom(art, Article);
})();
