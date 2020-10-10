const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
  }
  encrypt(string, key) {
    this.string = string.toUpperCase();
    this.key = key.toUpperCase();
    let keyNew = '';
    let temp;
    let encryptString = [];
    for(let i=0, j=0; i < this.string.length; i++, j++){
      if(this.isLetter(this.string[i])){
        if(j === this.key.length) j = 0;
        
        keyNew += this.key[j];
        
      }else{
        keyNew += this.string[i];
        j--;
      }
    }
    for(let i=0; i < this.string.length; i++){
      if(this.isLetter(this.string[i])){
        temp = ((this.string[i].charCodeAt() - 65) + (keyNew[i].charCodeAt() - 65)) % 26;
        encryptString.push(String.fromCharCode(temp+65));
      }else{
        encryptString.push(this.string[i]);
      }
    }
    return this.direct ? encryptString.join('') : encryptString.reverse().join(''); 
  }    
  
  decrypt(string, key) {
    string = string.toUpperCase();
    key = key.toUpperCase();
    let keyNew = '';
    let temp;
    let decryptString = [];
    for(let i=0, j=0; i < string.length; i++, j++){
      if(this.isLetter(string[i])){
        if(j === key.length) j = 0;
        
        keyNew += key[j];
        
      }else{
        keyNew += string[i];
        j--;
      }
    }
    for(let i = string.length-1; i >= 0; i--){
      if(this.isLetter(string[i])){
        temp = ((string[i].charCodeAt() - 65) - (keyNew[i].charCodeAt() - 65) + 26) % 26;
        decryptString.push(String.fromCharCode(temp+65));
      }else{
        decryptString.push(string[i]);
      }
    }
    return this.direct ? decryptString.reverse().join('') : decryptString.join(''); 
  }
  isLetter(letter){
    return (letter.charCodeAt() - 65) < 26 && (letter.charCodeAt() - 65) >= 0 ? true : false;
  }
}


module.exports = VigenereCipheringMachine;
