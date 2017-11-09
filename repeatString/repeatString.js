var repeatString = function(string, number) {
  var repeated = '';
  if (number < 0) {
    return 'ERROR';
  }
  for (i = 0; i < number; i++) {
    repeated += string;
  }
  return repeated;
}

module.exports = repeatString
