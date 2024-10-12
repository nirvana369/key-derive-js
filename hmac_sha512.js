import { Buffer } from 'buffer';

export async function hmac_sha512(key, data) {
    let keyBuffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    let dataBuffer = typeof data === 'string' ? Buffer.from(data, 'utf-8') : data;
    const hmacAlgo = { name: "HMAC", hash: "SHA-512" };
    const hmacKey = await crypto.subtle.importKey("raw", keyBuffer, hmacAlgo, false, ["sign"]);
    return Buffer.from(await crypto.subtle.sign(hmacAlgo, hmacKey, dataBuffer));
}