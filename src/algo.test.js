import F from "falcon-crypto";
import { test } from "node:test";
import assert from "node:assert";
import { sign, verify } from "./algo.js";
import { generateRandomString } from "./utils.js";

const falcon = F.falcon;

test("converts a string to a Uint8Array and back", async () => {
  const keyPair = await falcon.keyPair();
  const message = { message: generateRandomString() };

  const signature = await sign(message, keyPair.privateKey);

  assert.deepEqual(typeof signature, "string");
  const verified = await verify(signature, message, keyPair.publicKey);
  assert.deepEqual(verified, true);
});
