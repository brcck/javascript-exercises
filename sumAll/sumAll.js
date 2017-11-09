var sumAll = function(start, end) {
  var sum = 0;

  if (start < 0 || end < 0 || typeof(start) != "number" || typeof(end) != "number") {
    return 'ERROR';
  }

  if (start > end) {
    var temp = start;
    start = end;
    end = temp;
  }

  for (i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
