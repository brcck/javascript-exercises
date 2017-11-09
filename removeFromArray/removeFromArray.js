var removeFromArray = function(array) {
  var staticLength = array.length;
  var toRemove = [...arguments];
  toRemove.shift();

  for (i = 0; i <= staticLength; i++) {
    var index = array.indexOf(toRemove[i]);
    if (index != -1) {
      array.splice(index, 1);
    }
  }

  return array;
};

module.exports = removeFromArray;
