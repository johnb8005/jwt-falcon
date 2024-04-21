// index.d.ts
declare function sign(payload: any, privateKey: Uint8Array): Promise<string>;
declare function verify(jwt: string, publicKey: Uint8Array): Promise<boolean>;
declare function decode<A>(jwt: string): A;

export { sign, verify, decode };
