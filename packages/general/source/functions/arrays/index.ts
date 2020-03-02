/**
 * Returns the range of integers between start (including) and end (excluding).
 *
 * https://dev.to/namirsab/comment/2050
 * @param start
 * @param end
 */
export const range = (
    start: number,
    end: number,
) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}


/**
 * Check if two arrays are equal.
 *
 * @param a
 * @param b
 */
export const equal = <T>(
    a: T[],
    b: T[],
): Boolean => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}
