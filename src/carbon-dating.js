const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LOG_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  
  if (parseFloat(sampleActivity) > 0 || 
  parseFloat(sampleActivity) <= 0 || 
  sampleActivity <= 0 || 
  sampleActivity === null || 
  sampleActivity === undefined || isNaN(sampleActivity)) return false;

  sampleActivity = sampleActivity.ceil();
  let k = LOG_2 / HALF_LIFE_PERIOD;
  let time = Math.log(sampleActivity / MODERN_ACTIVITY) / k;
  return time;
};
