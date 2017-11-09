var reverseString = function(original) {
  var reversed = '';
  for (i = original.length; i > 0; i--) {
    reversed += original[i - 1];
  }
  return reversed;
}

module.exports = reverseString
