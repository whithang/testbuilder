/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa', 'Test failed');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa','Test failed');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa','Test failed');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  /*var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })*/

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011234567890123')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011234567890123456')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6548234567890123')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6548234567890123456')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix + '1234567890123456')).to.equal('Discover');
      });
    })(prefix)
  }
});

describe('Maestro', function() {
  var expect = chai.expect;
  var addDigits = '1234567';
  var prefix = ['5018', '5020', '5038', '6304'];
  for (var len = 12; len <= 19; len++) {
    addDigits += '1';
    for (var i = 0; i<prefix.length; i++){
      (function(len, prefix, i, addDigits) {
        it('has a prefix of ' + prefix[i] + ' and a length of ' + len, function(){
          expect(detectNetwork(prefix[i] + addDigits)).to.equal('Maestro');
        });
      })(len, prefix, i, addDigits)
    }
  }
});

describe('China UnionPay', function(){
  var expect = chai.expect;
  var addDigits = '123456789';
  for (var len = 16; len <= 19; len++){
    addDigits += '1';
    for (var prefix = 622126; prefix <= 622925; prefix++) {
      (function(len, prefix, addDigits) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function(){
          expect(detectNetwork(prefix + addDigits)).to.equal('China UnionPay');
        });
      })(len, prefix, addDigits)
    }
  }

  addDigits = '123456789012';
  for (var len = 16; len <= 19; len++){
    addDigits += '1';
    for (var prefix = 624; prefix <= 626; prefix++) {
      (function(len, prefix, addDigits) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function(){
          expect(detectNetwork(prefix + addDigits)).to.equal('China UnionPay');
        });
      })(len, prefix, addDigits)
    }
  }

  addDigits = '12345678901';
  for (var len = 16; len <= 19; len++){
    addDigits += '1';
    for (var prefix = 6282; prefix <= 6288; prefix++) {
      (function(len, prefix, addDigits) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function(){
          expect(detectNetwork(prefix + addDigits)).to.equal('China UnionPay');
        });
      })(len, prefix, addDigits)
    }
  }
})

describe('Switch', function(){
  var expect = chai.expect;
  var addDigits = '12345678901';
  var smallDigits = '123456789';
  for (var len = 16; len <= 19; len++){
    addDigits += '1';
    smallDigits += '1';
    if (len !== 17){
      (function(len, addDigits, smallDigits) {
        it('has a prefix of 4903 and a length of ' + len, function(){
          expect(detectNetwork('4903' + addDigits)).to.equal('Switch');
        });
        it('has a prefix of 4905 and a length of ' + len, function(){
          expect(detectNetwork('4905' + addDigits)).to.equal('Switch');
        });
        it('has a prefix of 4911 and a length of ' + len, function(){
          expect(detectNetwork('4911' + addDigits)).to.equal('Switch');
        });
        it('has a prefix of 4936 and a length of ' + len, function(){
          expect(detectNetwork('4936' + addDigits)).to.equal('Switch');
        });
        it('has a prefix of 6333 and a length of ' + len, function(){
          expect(detectNetwork('6333' + addDigits)).to.equal('Switch');
        });
        it('has a prefix of 6759 and a length of ' + len, function(){
          expect(detectNetwork('6759' + addDigits)).to.equal('Switch');
        });
        it('has a prefix of 564182 and a length of ' + len, function(){
          expect(detectNetwork('564182' + smallDigits)).to.equal('Switch');
        });
        it('has a prefix of 633110 and a length of ' + len, function(){
          expect(detectNetwork('633110' + smallDigits)).to.equal('Switch');
        });
      })(len, addDigits, smallDigits)
    }
  }
})
