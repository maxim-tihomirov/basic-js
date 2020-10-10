const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = '';
  if(str !== null) str = str.toString();
  let separator =  options.separator === undefined  ? '+' : options.separator;
  let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  let repeatAddition = `${options.addition === undefined ? '' : options.addition}${additionSeparator}`.repeat(options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes).slice(0, -additionSeparator.length);
  newStr = `${str}${repeatAddition}${separator}`.repeat(options.repeatTimes === undefined ? 1 : options.repeatTimes).slice(0, -separator.length);
  return newStr;
};
  