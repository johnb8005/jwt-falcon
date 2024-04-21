import F from "falcon-crypto";
import { test } from "node:test";
import assert from "node:assert";
import { decode, sign, verify } from "./index.js";
import { generateRandomString } from "./utils.js";

const falcon = F.falcon;

test("jwt round trip", async () => {
  const keyPair = await falcon.keyPair();
  const message = { message: generateRandomString() };
  let jwt;

  test("sign", async () => {
    jwt = await sign(message, keyPair.privateKey);

    assert.deepEqual(typeof jwt, "string");
  });

  test("decode", async () => {
    const decoded = await decode(jwt);
    assert.deepEqual(message, decoded);
  });

  test("verify", async () => {
    const verified = await verify(jwt, keyPair.publicKey);

    assert.deepEqual(verified, true);
  });
});
