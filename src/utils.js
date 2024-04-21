export function uint8ArrayToString(data) {
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(data);
}

export function stringToUint8Array(str) {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

export const uint8ArrayToBase64 = (data) =>
  Buffer.from(data).toString("base64");

export const stringToBase64 = (str) =>
  uint8ArrayToBase64(Buffer.from(str, "utf8"));

export const base64ToString = (base64) => {
  const buffer = Buffer.from(base64, "base64");
  return buffer.toString("utf8");
};

export const base64ToUint8Array = (base64) => {
  const buffer = Buffer.from(base64, "base64");
  return new Uint8Array(buffer);
};

export const encodePayload = (payload) =>
  stringToUint8Array(JSON.stringify(payload));
