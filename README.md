# JWT-falcon

[![test](https://github.com/johnb8005/jwt-ntru/actions/workflows/test.yml/badge.svg)](https://github.com/johnb8005/jwt-ntru/actions/workflows/test.yml)
[![Publish](https://github.com/johnb8005/jwt-ntru/actions/workflows/publish.yml/badge.svg)](https://github.com/johnb8005/jwt-ntru/actions/workflows/publish.yml)
[![NPM package](https://badge.fury.io/js/jwt-falcon.svg)](https://www.npmjs.com/package/jwt-falcon)
[![NPM package](https://img.shields.io/npm/v/jwt-falcon.svg)](https://www.npmjs.com/package/jwt-falcon)

A lightweight JavaScript library for generating and verifying JSON Web Tokens (JWT) using the Falcon cryptographic algorithm, a lattice-based signature scheme that is post-quantum (PQ) proof and resistant to attacks from quantum computers.
**Features**

- Generates JWTs using the Falcon algorithm
- Verifies JWTs using the Falcon algorithm
- Decodes JWTs to extract the payload

**Install**

Install the package: `npm install jwt-falcon`

**Example**

```javascript
import Falcon from "falcon-crypto";
import { sign, verify, decode } from "jwt-falcon";
import { generateRandomString } from "./utils.js";

const falcon = F.falcon;

const keyPair = await falcon.keyPair();
const message = { message: generateRandomString() };

// sign and get JWT
const jwt = await sign(message, keyPair.privateKey);

// decode and verify
const decoded = await decode(jwt);
const verified = await verify(jwt, keyPair.publicKey);
```

**License**

This library is licensed under the MIT License.

**Contributing**

Contributions are welcome! Please submit a pull request with your changes.
