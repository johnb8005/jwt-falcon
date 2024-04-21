**JWT-falcon**

A lightweight JavaScript library for generating and verifying JSON Web Tokens (JWT) using the Falcon cryptographic algorithm.

**Features**

- Generates JWTs using the Falcon algorithm
- Verifies JWTs using the Falcon algorithm
- Decodes JWTs to extract the payload

**Usage**

1. Install the package: `npm install jwt-falcon`
2. Import the library: `import { sign, verify, decode } from 'jwt-falcon';`
3. Generate a JWT: `const jwt = await sign({ message: 'Hello, World!' }, privateKey);`
4. Verify a JWT: `const verified = await verify(jwt, publicKey);`
5. Decode a JWT: `const decoded = await decode(jwt);`

**Example**

```javascript
import { sign, verify, decode } from "jwt-falcon";
import { generateRandomString } from "./utils.js";

const keyPair = await falcon.keyPair();
const message = { message: generateRandomString() };

const jwt = await sign(message, keyPair.privateKey);

assert.deepEqual(typeof jwt, "string");

const decoded = await decode(jwt);
assert.deepEqual(message, decoded);
const verified = await verify(jwt, keyPair.publicKey);

assert.deepEqual(verified, true);
```

**License**

This library is licensed under the MIT License.

**Contributing**

Contributions are welcome! Please submit a pull request with your changes.
