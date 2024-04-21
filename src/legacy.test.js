// this is never used but just used as a benchmark against NTRU Falcon
import { test } from "node:test";
import assert from "node:assert";
import { generateRandomString } from "./utils.js";
import JWT from "jsonwebtoken";

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
