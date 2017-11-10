var fibonacci = function(number) {
  if (number < 0) return "OOPS";
  let sequence = [];
  for (let i = 0; i < number; i++) {
    if (i < 2) {
      sequence[i] = 1;
    } else {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  }
  return sequence.pop();
}

module.exports = fibonacci
