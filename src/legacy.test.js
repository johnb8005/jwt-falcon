// this is never used but just used as a benchmark against NTRU Falcon
import { test, describe } from "node:test";
import assert from "node:assert";
import JWT from "jsonwebtoken";
import { generateKeys, generateRandomString } from "./test-utils.js";

describe("JWT legacy", () => {
  test("JWT Round Trip", async (t) => {
    const secret = "mysecret";
    const message = { message: generateRandomString() };
    let jwt;

    await t.test("Sign JWT", async () => {
      jwt = JWT.sign(message, secret);
      assert.strictEqual(typeof jwt, "string", "JWT should be a string");
    });

    await t.test("Decode JWT", async () => {
      const decoded = JWT.decode(jwt);
      assert.deepStrictEqual(
        decoded,
        { ...message, iat: decoded.iat },
        "Decoded message should match the original"
      );
    });

    await t.test("Verify JWT", async () => {
      try {
        const verified = JWT.verify(jwt, secret);
        assert.deepStrictEqual(
          verified,
          { ...message, iat: verified.iat },
          "Verified message should be valid"
        );
      } catch (error) {
        assert.fail("Verification should not fail");
      }
    });
  });

  test("JWT asymetric Round Trip", async (t) => {
    const keyPair = await generateKeys();
    const message = { message: generateRandomString() };
    let jwt;

    await t.test("Sign JWT", async () => {
      jwt = JWT.sign(message, keyPair.privateKey, { algorithm: "RS256" });
      assert.strictEqual(typeof jwt, "string", "JWT should be a string");
    });

    await t.test("Decode JWT", async () => {
      const decoded = JWT.decode(jwt);
      assert.deepStrictEqual(
        decoded,
        { ...message, iat: decoded.iat },
        "Decoded message should match the original"
      );
    });

    await t.test("Verify JWT", async () => {
      try {
        const verified = JWT.verify(jwt, keyPair.publicKey, {
          algorithms: ["RS256"],
        });
        assert.deepStrictEqual(
          verified,
          { ...message, iat: verified.iat },
          "Verified message should be valid"
        );
      } catch (error) {
        assert.fail("Verification should not fail");
      }
    });
  });
});
