const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  
  members = members.filter(member => {
    if(typeof(member) === 'string'){
     return member;
    }
  });

  let s = members.map(m => {
    return m.trim()[0].toUpperCase();
  }).sort().join("");
  
    return s;
};
