import crypto, { generateKeyPair } from "crypto";

export const generateRandomString = (length = 12) =>
  crypto.randomBytes(length).toString("hex");

export const generateKeys = () =>
  new Promise((resolve) =>
    generateKeyPair(
      "rsa",
      {
        modulusLength: 2048, // the length of your key in bits
        publicKeyEncoding: {
          type: "spki", // recommended to be 'spki' for public key
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs8", // recommended to be 'pkcs8' for private key
          format: "pem",
        },
      },
      async (err, publicKey, privateKey) => {
        if (err) {
          console.error(err);
          return;
        }

        return resolve({ publicKey, privateKey });
      }
    )
  );
