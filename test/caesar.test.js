const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("edge case", () => {
    it("should return false if the shift amount is 0", () => {
      const input = "testing";
      const shift = 0;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const input = "testing";
      const shift = 26;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const input = "testing";
      const shift = -26;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encode", () => {
    it("should encode a message by shifting the letters", () => {
      const input = "testing";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "whvwlqj";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols", () => {
      const input = "testing this.";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "whvwlqj wklv.";

      expect(actual).to.equal(expected);
    });

    it("ignore capital letters", () => {
      const input = "TEST";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "whvw";

      expect(actual).to.equal(expected);
    });

    it("handle letters at the end of the alphabet", () => {
      const input = "Zoo";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "crr";

      expect(actual).to.equal(expected);
    });

    it("shift to the left", () => {
      const input = "testing";
      const shift = -3;
      const actual = caesar(input, shift);
      const expected = "qbpqfkd";

      expect(actual).to.equal(expected);
    });
  });
  describe("decode", () => {
    it("decode by shifting the letters in the opposite direction", () => {
      const input = "whvwlqj";
      const shift = 3;
      const actual = caesar(input, shift, false);
      const expected = "testing";

      expect(actual).to.equal(expected);
    });

    it("leaves spaces and other symbols", () => {
      const input = "whvwlqj wklv.";
      const shift = 3;
      const actual = caesar(input, shift, false);
      const expected = "testing this.";

      expect(actual).to.equal(expected);
    });

    it("ignore capital letters", () => {
      const input = "Whvwlqj wklv.";
      const shift = 3;
      const actual = caesar(input, shift, false);
      const expected = "testing this.";

      expect(actual).to.equal(expected);
    });

    it("handle letters at the end of the alphabet", () => {
      const input = "crr";
      const shift = 3;
      const actual = caesar(input, shift, false);
      const expected = "zoo";

      expect(actual).to.equal(expected);
    });

    it("negative shift that will shift to the left", () => {
      const input = "qbpqfkd";
      const shift = -3;
      const actual = caesar(input, shift, false);
      const expected = "testing";

      expect(actual).to.equal(expected);
    });
  });
;
