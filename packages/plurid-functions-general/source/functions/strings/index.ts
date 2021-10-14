// #region module
export const removeWhitespace = (
    value: string | undefined,
) => {
    if (!value) {
        return '';
    }

    return value
        .replace(/\s+/g, ' ')
        .trim();
}


/**
 * Capitalizes the first letter of the word.
 *
 * ``` text
 * e.g. foo -> Foo
 * ```
 *
 * @param value
 */
 export const capitalize = (
    value: string,
) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}


/**
 * Capitalizes the first letter of every word.
 *
 * ``` text
 * e.g. foo boo -> Foo Boo
 * ```
 *
 * @param value
 */
export const capitalizeAll = (
    value: string,
) => {
    const splits = value.split(' ');

    const capitalizedSplits = splits.map(split => {
        return capitalize(split);
    });

    return capitalizedSplits.join(' ');
}


/**
 * Truncates the `value` to a given `length` adding the `ending`.
 *
 * ``` text
 * e.g. 1234567890 -> 1234...
 * ```
 *
 * ``` typescript
 * truncate('1234567890', 4)
 * ```
 *
 * @param value
 * @param length default `100`
 * @param ending default `'...'`
 * @returns
 */
export const truncate = (
    value: string | undefined,
    length: number = 50,
    ending: string = '...',
) => {
    if (!value) {
        return '';
    }

    if (value.length <= length) {
        return value;
    }

    return value.slice(0, length) + ending;
}
// #endregion module
