(function() {
  console.log('Headline')

  console.log('Test 1 " Test for instantiation of Headline"')
  var head = new Headline();
  assert.isConstructedFrom(head, Headline);

})();
