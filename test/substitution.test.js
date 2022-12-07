const { expect } = require("chai");
const { substitution } = require("../src/substitution");

    describe("encoding", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const input = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(input, alphabet);
            const expected = "ykrrpik";

            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
        const input = "hello";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "dsccv";

        expect(actual).to.equal(expected);
    });

        it("preserve spaces", () => {
            const input = "Hi how are you";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet);
            const expected = "dx dvk .bs pvn";

            expect(actual).to.equal(expected);
        });
        });

  describe("error handling", () => {
      
      it("should return false if the substitution alphabet is not 26 characters", () => {
          const input = "test";
          const alphabet = "asdfg";
          const actual = substitution(input, alphabet);
          expect(actual).to.be.false;
        });
        it("should return false if the substitution alphabet is missing", () => {
          const input = "Hello";
          const actual = substitution(input);
          expect(actual).to.be.false;
        });
        
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const input = "Hello";
      const alphabet = "dsdsdsdsdsdsdsdsdsdsdsdsds";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });


  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const input = "okmcok djbr";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(input, alphabet, false);
      const expected = "decode this";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const input = "c.ujvu";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "laptop";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const input = "jdxi k.i zng";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "this was fun";

      expect(actual).to.equal(expected);
    });
  });
;
