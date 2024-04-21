export function uint8ArrayToString(data) {
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(data);
}

export function stringToUint8Array(str) {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

export const uint8ArrayToBase64 = (data) => {
  const base64 = Buffer.from(data).toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

export const stringToBase64 = (str) =>
  uint8ArrayToBase64(Buffer.from(str, "utf8"));

export const base64ToString = (base64url) => {
  const base64Padded = base64UrltoPadded(base64url);

  const buffer = Buffer.from(base64Padded, "base64");
  return buffer.toString("utf8");
};

const base64UrltoPadded = (base64url) => {
  // Convert Base64 URL to Base64 by reversing the URL-specific modifications
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");

  // Calculate the number of padding characters to add
  const paddingNeeded = (4 - (base64.length % 4)) % 4;
  return base64 + "=".repeat(paddingNeeded);
};

export const base64ToUint8Array = (base64url) => {
  const base64Padded = base64UrltoPadded(base64url);
  const buffer = Buffer.from(base64Padded, "base64");
  return new Uint8Array(buffer);
};

export const encodePayload = (payload) =>
  stringToUint8Array(JSON.stringify(payload));
