const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let turns = Math.pow(2, disksNumber)-1;
  let seconds = (turns / (turnsSpeed / 60)).toFixed(4) * 60;
  seconds = Math.floor(seconds);
  return {turns, seconds};
};
