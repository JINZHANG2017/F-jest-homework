import axios from "axios";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock

    const p = axios.get().then((response) => response.data);
    await expect(p).resolves.toEqual({ result: "OK" });
  });
});
