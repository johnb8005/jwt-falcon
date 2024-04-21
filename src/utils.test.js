import { test, describe } from "node:test";
import assert from "node:assert";

import {
  uint8ArrayToString,
  stringToUint8Array,
  uint8ArrayToBase64,
  base64ToUint8Array,
  generateRandomString,
  base64ToString,
  stringToBase64,
} from "./utils.js";

describe("converts a string to a Uint8Array and back", () => {
  const helloEncoded = new Uint8Array([104, 101, 108, 108, 111]);
  const message = "hello";

  test("converts correctly", () => {
    const actualOutput = stringToUint8Array(message);

    assert.deepStrictEqual(
      actualOutput,
      helloEncoded,
      "The Uint8Array should match the expected output"
    );
  });

  test("converts correctly", () => {
    const actualOutput = uint8ArrayToString(helloEncoded);

    assert.deepStrictEqual(
      actualOutput,
      message,
      "The Uint8Array should match the expected output"
    );
  });

  test("round trip", () => {
    const message = generateRandomString();
    const uint8Array = stringToUint8Array(message);
    const messageOut = uint8ArrayToString(uint8Array);

    assert.deepStrictEqual(message, messageOut);
  });
});

describe("base64 to a Uint8Array and back", () => {
  test("round trip", () => {
    const message = generateRandomString();
    const messageEncoded = stringToUint8Array(message);
    const b64 = uint8ArrayToBase64(messageEncoded);
    const messageOut = base64ToUint8Array(b64);

    assert.deepStrictEqual(messageEncoded, messageOut);
  });
});

describe("base64 to a string and back", () => {
  test("round trip", () => {
    const message = generateRandomString();
    const messageEncoded = stringToBase64(message);
    const messageOut = base64ToString(messageEncoded);

    assert.strictEqual(message, messageOut);
  });
});
