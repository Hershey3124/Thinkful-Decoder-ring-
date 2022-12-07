const { expect } = require("chai");
const { polybius } = require("../src/polybius");

  describe("encoding", () => {
      
      it("translate both 'i' and 'j' to 42", () => {
          const input = "jungle";
          const actual = polybius(input);
          const expected = "425433221351";
          
          expect(actual).to.equal(expected);
        });
        it("should encode a message by translating each letter to number pairs", () => {
          const input = "input";
          const actual = polybius(input);
          const expected = "4233535444";
    
          expect(actual).to.equal(expected);
        });
        
    it("should leave spaces as is", () => {
      const input = "Is it working";
      const actual = polybius(input);
      const expected = "4234 4244 25432452423322";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const input = "4244 2543245234";
      const actual = polybius(input, false);
      const expected = "(i/j)t works";

      expect(actual).to.equal(expected);
    });
    
    it("should return false if the length of all numbers is odd", () => {
        const input= "2345 235134341122514";
        const actual = polybius(input, false);
        
        expect(actual).to.be.false;
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const input = "4244 2543245234";
      const actual = polybius(input, false);
      const expected = "(i/j)t works"
      
      expect(actual).to.equal("(i/j)t works");
    
    });
    
    it("should leave spaces as is", () => {
      const input = "4234 4244 25432452423322";
      const actual = polybius(input, false);
      const expected = "(i/j)s (i/j)t work(i/j)ng";

      expect(actual).to.equal(expected);
    });
  });

