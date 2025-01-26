/**
 * @jest-environment jsdom
 */

const { evaluateGuess } = require("../js/index.js");

const testData = {
  twoCorrectPositionAndColour: {
    codemakerCode: ["red", "green", "blue", "yellow"],
    codebreakerCode: ["red", "black", "black", "yellow"],
  },
  equalSplit: {
    codemakerCode: ["red", "green", "blue", "yellow"],
    codebreakerCode: ["red", "green", "yellow", "blue"],
  },
  noneCorrect: {
    codemakerCode: ["red", "green", "blue", "yellow"],
    codebreakerCode: ["black", "black", "black", "black"],
  },
  oneCorrectColourAndPosition_twoIdenticalInCode: {
    codemakerCode: ["red", "red", "blue", "yellow"],
    codebreakerCode: ["red", "black", "black", "black"],
  },
  oneCorrectColourAndPosition_twoIdenticalInGuess: {
    codemakerCode: ["red", "green", "blue", "yellow"],
    codebreakerCode: ["red", "red", "black", "black"],
  },
  allCorrectColourAndPosition: {
    codemakerCode: ["red", "green", "blue", "yellow"],
    codebreakerCode: ["red", "green", "blue", "yellow"],
  },
  allCorrectColourOnly: {
    codemakerCode: ["red", "green", "blue", "yellow"],
    codebreakerCode: ["yellow", "blue", "green", "red"],
  },
};

describe("guess evaluation", () => {
  it("should provide 2 black key pegs", () => {
    const ev = evaluateGuess(
      testData.twoCorrectPositionAndColour.codemakerCode,
      testData.twoCorrectPositionAndColour.codebreakerCode,
    );
    expect(ev.correctPositionAndColour).toBe(2);
    expect(ev.correctColourOnly).toBe(0);
  });

  it("should provide 2 black and 2 grey key pegs", () => {
    const ev = evaluateGuess(
      testData.equalSplit.codemakerCode,
      testData.equalSplit.codebreakerCode,
    );
    expect(ev.correctPositionAndColour).toBe(2);
    expect(ev.correctColourOnly).toBe(2);
  });

  it("should provide no key pegs", () => {
    const ev = evaluateGuess(
      testData.noneCorrect.codemakerCode,
      testData.noneCorrect.codebreakerCode,
    );
    expect(ev.correctPositionAndColour).toBe(0);
    expect(ev.correctColourOnly).toBe(0);
  });

  it("should provide 1 black key peg", () => {
    const ev = evaluateGuess(
      testData.oneCorrectColourAndPosition_twoIdenticalInCode.codemakerCode,
      testData.oneCorrectColourAndPosition_twoIdenticalInCode.codebreakerCode,
    );
    expect(ev.correctPositionAndColour).toBe(1);
    expect(ev.correctColourOnly).toBe(0);
  });

  it("should provide 1 black key peg", () => {
    const ev = evaluateGuess(
      testData.oneCorrectColourAndPosition_twoIdenticalInGuess.codemakerCode,
      testData.oneCorrectColourAndPosition_twoIdenticalInGuess.codebreakerCode,
    );
    expect(ev.correctPositionAndColour).toBe(1);
    expect(ev.correctColourOnly).toBe(0);
  });

  it("should provide 4 black key pegs", () => {
    const ev = evaluateGuess(
      testData.allCorrectColourAndPosition.codemakerCode,
      testData.allCorrectColourAndPosition.codebreakerCode,
    );
    expect(ev.correctPositionAndColour).toBe(4);
    expect(ev.correctColourOnly).toBe(0);
  });

  it("should provide 4 grey key pegs", () => {
    const ev = evaluateGuess(
      testData.allCorrectColourOnly.codemakerCode,
      testData.allCorrectColourOnly.codebreakerCode,
    );
    expect(ev.correctPositionAndColour).toBe(0);
    expect(ev.correctColourOnly).toBe(4);
  });
});
