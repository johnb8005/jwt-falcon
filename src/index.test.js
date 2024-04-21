import F from "falcon-crypto";
import { test } from "node:test";
import assert from "node:assert";
import { decode, sign, verify } from "./index.js";
import { generateRandomString } from "./utils.js";

const falcon = F.falcon;

test("converts a string to a Uint8Array and back", async () => {
  const keyPair = await falcon.keyPair();
  const message = { message: generateRandomString() };

  const jwt = await sign(message, keyPair.privateKey);

  assert.deepEqual(typeof jwt, "string");

  const decoded = await decode(jwt);
  assert.deepEqual(message, decoded);
  const verified = await verify(jwt, keyPair.publicKey);

  assert.deepEqual(verified, true);
});
