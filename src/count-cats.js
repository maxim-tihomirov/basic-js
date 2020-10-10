const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = matrix.flat().reduce(function (previous, current){
    if('^^' === current){
      previous++;
    }
    return previous;
  }, 0);
  return result;
};
