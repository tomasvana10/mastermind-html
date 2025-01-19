const liveServer = "http://127.0.0.1:5500"; // must be hosting when running

describe("User interface", () => {
  beforeAll(async () => {
    await page.goto(liveServer);
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch("Google");
  });
});
