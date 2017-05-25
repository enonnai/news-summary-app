(function() {
  console.log('Headline')

  console.log('Test 1 " Test for instantiation of Headline"')
  var head = new Headline();
  var article  = new Article(article);
  assert.isConstructedFrom(head, Headline);

  console.log('Test 2: Headline is instatiated with an array');
  assert.isTrue(Array.isArray(head.headlines));

  console.log('Test 3: Article is added to the headline arrray');
  head.listHeadline(article)
  assert.isTrue(Array.isArray(head.headlines));
})();
