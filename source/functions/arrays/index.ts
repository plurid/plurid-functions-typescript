/**
 * Returns the range of integers between start (including) and end (excluding).
 *
 * https://dev.to/namirsab/comment/2050
 * @param start
 * @param end
 */
export const range = (start: number, end: number) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}
