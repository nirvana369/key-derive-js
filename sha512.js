import { Buffer } from 'buffer';

export async function sha512(source) {
    if (typeof source === 'string') {
        return Buffer.from(await crypto.subtle.digest("SHA-512", Buffer.from(source, 'utf-8')));
    }
    return Buffer.from(await crypto.subtle.digest("SHA-512", source));
}