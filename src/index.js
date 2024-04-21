import { base64ToString, stringToBase64 } from "./utils.js";
import * as Algo from "./algo.js";

const header = { typ: "JWT", alg: "NTRU-Falcon" };

export const sign = async (payload, privateKey) => {
  const b64Header = stringToBase64(JSON.stringify(header));
  const b64Payload = stringToBase64(JSON.stringify(payload));
  const signature = await Algo.sign(b64Payload, privateKey);
  return [b64Header, b64Payload, signature].join(".");
};

export const verify = async (jwt, publicKey) => {
  const [_header, payload, signature] = jwt.split(".");

  return Algo.verify(signature, payload, publicKey);
};

export const decode = async (jwt) => {
  const [_header, payload, _signature] = jwt.split(".");

  return JSON.parse(base64ToString(payload));
};
