import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async() => {
    // TODO 19: add test here
    verifyPassword.mockReturnValueOnce(true);
    verifyUsername.mockReturnValueOnce(true);

    const result=register("username","pwd");

    await expect(result).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async() => {
    // TODO 20: add test here
    verifyPassword.mockReturnValueOnce(true);
    verifyUsername.mockReturnValueOnce(false);
    // const result=register("username","pwd");
    await expect(() => 
    {register("username","pwd");}
       ).toThrow("wrong username or password");
    
  });
});
