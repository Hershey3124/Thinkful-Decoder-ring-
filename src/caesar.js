// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let lookUp = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    // edge case 
    if (shift === 0 || shift > 25 || shift < -25) return false;
    // to decode 
    if (encode === false ) shift = 0 - shift
    // lower cases capital letters
    let linput = input.toLowerCase()
    // loops through input and shifts 
    for (let i = 0; i < linput.length; i ++){
      let shiftedI = lookUp.indexOf(linput[i]) + shift;
    //  edge case for looping back from a - z or z - a 
      if (shiftedI < 0){
        shiftedI = shiftedI + 26
      }
      if (shiftedI > 25){
        shiftedI = shiftedI - 26
      }
    // adds shift into result 
      if (lookUp.includes(linput[i])) {
        result += lookUp.charAt(shiftedI)
    }else{
      result += linput[i]
    }
    }
    return result 

    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
