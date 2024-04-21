import F from "falcon-crypto";
import { test } from "node:test";
import assert from "node:assert";
import { decode, sign, verify } from "./index.js";
import { generateRandomString } from "./test-utils.js";

const falcon = F.falcon;

test("jwt round trip", async (t) => {
  const keyPair = await falcon.keyPair();
  const message = { message: generateRandomString() };
  let jwt;

  await t.test("sign", async () => {
    jwt = await sign(message, keyPair.privateKey);

    //console.log("jwt", jwt);

    assert.deepEqual(typeof jwt, "string");
  });

  await t.test("decode", async () => {
    const decoded = await decode(jwt);
    assert.deepEqual(message, decoded);
  });

  await t.test("verify", async () => {
    const verified = await verify(jwt, keyPair.publicKey);

    assert.deepEqual(verified, true);
  });
});
