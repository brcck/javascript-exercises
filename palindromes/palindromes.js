var palindromes = function(input) {
  let array = input.split('');
  let reversedString = array.reverse().toString();

  reversedString = reversedString.replace(/[.,!]/g, '')
                                 .replace(/\s/g,"");
  input = input.replace(/[.,!]/g, '')
               .replace(/\s/g,"");

  reversedString = reversedString.toLowerCase();
  input = input.toLowerCase();
  return reversedString === input;
};

module.exports = palindromes
