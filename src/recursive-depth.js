const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, value = 0) {
   
    if (Array.isArray(arr)){
      return arr.length 
      ? arr 
          .map(el => this.calculateDepth(el, value + 1))
          .reduce((pr, cur) => pr > cur ? pr : cur, 0)
      : value + 1;
    }
    else {
      return value;
    }
      }
};