import {
    isBrowser,
    isNode,
} from '../runtime';



/**
 * Generate a unique identifier with or without `separator`.
 *
 * Based on https://stackoverflow.com/a/2117523.
 *
 * @param separator
 */
export const v4Browser = (
    separator: string = '',
) => {
    return (
        [1e7] as any + separator + 1e3 + separator + 4e3 + separator + 8e3 + separator + 1e11).replace(/[018]/g,
        (c: any) => (((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> c / 4).toString(16)
    );
}


export const v4Node = (
    separator: string = '',
) => {
    const crypto = require('crypto');
    const id: string = crypto.randomBytes(16).toString('hex');
    if (!separator) {
        return id;
    }

    return id.slice(0, 8) + separator
        + id.slice(8, 12) + separator
        + id.slice(12, 16) + separator
        + id.slice(16, 20) + separator
        + id.slice(20);
}



export const generate = (
    separator: string = '',
    version: string = 'v4',
): string => {
    if (version === 'v4') {
        if (isBrowser) {
            return v4Browser(separator);
        }

        if (isNode) {
            return v4Node(separator);
        }
    }

    return '';
}
