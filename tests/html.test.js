const liveServer = "http://127.0.0.1:5500";

const { GUESSES, GUESS_SLOTS } = require("../js/constants.js");

describe("the html structure", () => {
  beforeEach(async () => {
    await jestPuppeteer.resetBrowser();
    await page.goto(liveServer);
  });

  it("should have `GUESSES` amount of game slices", async () => {
    const gameSlices = await page.$eval(
      "#gameSlices",
      container => container.children.length,
    );
    expect(gameSlices).toBe(GUESSES);
  });

  it("should have `GUESS_SLOTS` amount of code peg holders", async () => {
    const codePegHolders = await page.$$eval(".code-peg-holders", container =>
      container
        .map(holder => holder.children)
        .map(holders =>
          [...holders].filter(holder =>
            holder.classList.contains("code-peg-holder"),
          ),
        )
        .map(holders => holders.length),
    );
    expect(codePegHolders.every(length => length === GUESS_SLOTS)).toBe(true);
  });
});
