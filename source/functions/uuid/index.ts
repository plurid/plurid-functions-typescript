/**
 * Generate a unique identifier with or without `separator`.
 *
 * Based on https://stackoverflow.com/a/2117523.
 *
 * @param separator
 */
export const uuidv4 = (separator: string = '') => {
    return (
        [1e7] as any + separator + 1e3 + separator + 4e3 + separator + 8e3 + separator + 1e11).replace(/[018]/g,
        (c: any) => (((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> c / 4).toString(16)
    );
}
