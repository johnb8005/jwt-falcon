import F from "falcon-crypto";
import {
  base64ToUint8Array,
  encodePayload,
  uint8ArrayToBase64,
} from "./utils.js";

const falcon = F.falcon;

export const sign = async (payload, privateKey) => {
  const signature = await falcon.signDetached(
    encodePayload(payload),
    privateKey
  );
  return uint8ArrayToBase64(signature);
};

export const verify = async (signature, payload, publicKey) =>
  falcon.verifyDetached(
    base64ToUint8Array(signature),
    encodePayload(payload),
    publicKey
  );
