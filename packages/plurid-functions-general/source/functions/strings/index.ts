// #region imports
    // #region external
    import {
        shuffle as arraysShuffle,
    } from '../arrays';
    // #endregion external
// #endregion imports



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



/**
 * Given a text string, e.g. 'one two three',
 * it removes the last word, 'three', returning 'one two'.
 *
 * If the text string is one word, 'one', it returns ''.
 *
 * @param text Text string.
 */
export const removeLastWord = (
    text: string,
): string => {
    const wordsArray = text.split(' ');
    if (wordsArray.length === 1) {
        return '';
    }

    const removedLastWordArray = wordsArray.slice(0, wordsArray.length - 1);
    const words = removedLastWordArray.join(' ');

    return words;
}


/**
 * Given `PascalCaseValue` it returns `pascal.case.value`.
 *
 * @param value
 * @param lowercase default `true`
 * @returns
 */
export const pascalCaseToDotNotation = (
    value: string,
    lowercase = true,
) => {
    let newValue = '';

    for (let i = 0; i < value.length; i++) {
        const letter = value[i];

        if (letter === letter.toUpperCase()) {
            if (i !== 0) {
                newValue += '.';
            }

            if (lowercase) {
                newValue += letter.toLowerCase();
            } else {
                newValue += letter;
            }
        } else {
            newValue += letter;
        }
    }

    return newValue;
}


/**
 * Converts `Camel Case Value` to `camelCaseValue`.
 *
 * @param text
 */
export const toCamelCase = (
    value: string
) => {
    return value
        .toLowerCase()
        .replace(
            /[^a-zA-Z0-9]+(.)/g,
            (_, character) => character.toUpperCase(),
        );
}


/**
 * Shuffles the characters of the `text`.
 *
 * @param text
 * @returns
 */
export const shuffle = (
    text: string,
): string => {
    const shuffled = arraysShuffle(text.split(''));

    return shuffled.join('');
}
// #endregion module
