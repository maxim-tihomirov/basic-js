const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrStr: [],
  result: '',
  getLength() {
   return this.arrStr.length;
  },
  addLink(value = '') {
    this.arrStr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
   if(position > 0 && position < this.getLength()){
     this.arrStr.splice(position - 1, 1);
     
   }else{
      this.arrStr = [];
      throw 'Error';
   }
    return this;
  },
  reverseChain() {
    this.arrStr.reverse();
    return this;
  },
  finishChain() {
    this.result = this.arrStr.join('~~')
    this.arrStr = [];
    return this.result;
  }
};

module.exports = chainMaker;
