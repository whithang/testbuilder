// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstDigits = cardNumber.substring(0,2);
  var threeDigits = cardNumber.substring(0,3);
  var fourDigits = cardNumber.substring(0,4);
  var sixDigits = cardNumber.substring(0,6);
  var len = cardNumber.length;
  if (threeDigits === '624'){
    'hello';
  }
  if (cardNumber.length <= 19 && cardNumber.length >= 12){
    if (fourDigits === '5018' || fourDigits === '5020' || fourDigits === '5038' || fourDigits === '6304'){
      return 'Maestro';
    } else if (cardNumber.length === 14){
      if (firstDigits === '38' || firstDigits === '39'){
        return 'Diner\'s Club';
      }
    } else if (cardNumber.length === 15){
      if (firstDigits === '34' || firstDigits === '37'){
        return 'American Express';
      }
    } else if (cardNumber.length === 13 && firstDigits.substring(0,1) === '4'){
      return 'Visa';
    } else if (cardNumber.length <= 19 && cardNumber.length >= 16){
      if ((parseInt(sixDigits) >= 622126 && parseInt(sixDigits) <= 622925) || (parseInt(threeDigits) >= 624 && parseInt(threeDigits) <= 626) || (parseInt(fourDigits) >= 6282 && parseInt(fourDigits) <= 6288)){
        return 'China UnionPay';
      } else if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19){
        if (fourDigits === '4903' || fourDigits === '4905' || fourDigits === '4911' || fourDigits === '4936' || fourDigits === '6333' || fourDigits === '6759' || sixDigits === '564182' || sixDigits === '633110'){
          return 'Switch';
        }
        if (cardNumber.length === 16 || cardNumber.length === 19){
          if (fourDigits === '6011' || firstDigits === '65' || threeDigits === '644' || threeDigits === '645' || threeDigits === '646' || threeDigits === '647' || threeDigits === '648' || threeDigits === '649'){
            return 'Discover';
          } else if (firstDigits.substring(0,1) === '4'){
            return 'Visa';
          } else if (cardNumber.length !== 19){
            if (firstDigits === '51' || firstDigits === '52' || firstDigits === '53' || firstDigits === '54' || firstDigits === '55'){
              return 'MasterCard';
            }
          }
        }
      }
    }
  }
  return 'error';
};
