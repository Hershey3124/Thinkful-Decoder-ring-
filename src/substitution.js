// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const result = [];
  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  function substitution(input, alphabet, encode = true) {
    
    if (!alphabet || alphabet.length !== 26) return false;
    
    let alphabetArr = alphabet.toLowerCase().split("")
    const unique = alphabetArr.filter(
      (item, index, self) => self.indexOf(item) === index
      );

    
    if (unique.length !== alphabet.length) return false;
        
    alphabet.split("");
    if (encode)
    {
      for (let i = 0; i < 26; i++)
      {
        result[normalAlphabet[i]] = alphabet[i];
        
      }
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        result[alphabet[i]] = normalAlphabet[i];
      }
    }
    let solution = input.toLowerCase().split("").map((char) => {
      if (char === " ") return " ";
      return result[char]
    })
    return solution.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
