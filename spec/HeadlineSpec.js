(function() {
  console.log('Headline')

  console.log('Test 1 " Test for instantiation of Headline"')
  var head = new Headline();
  assert.isConstructedFrom(head, Headline);

  console.log('Test 2: Headline is instatiated with an array');
  assert.isTrue(Array.isArray(head.headlines));
})();
