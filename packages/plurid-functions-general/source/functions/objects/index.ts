/**
 * http://blog.nicohaemhouts.com/2015/08/03/accessing-nested-javascript-objects-with-string-key/
 *
 * @param data
 * @param path
 * @param separator
 */
export const getNested = <T>(
    data: T,
    path: string,
    separator: string = '.',
) => {
    try {
        return path.
            replace('[', separator).replace(']','').
            split(separator).
            reduce(
                (obj: any, property: string) => {
                    return obj[property];
                },
                data,
            );
    } catch (err) {
        return undefined;
    }
}


/**
 * https://stackoverflow.com/a/52912610
 *
 * @param data
 * @param update
 * @param path
 * @param separator
*/
export const updateNested = <T, U>(
   data: T,
   path: string,
   update: U,
   separator: string = '.',
): T | undefined => {
    try {
        const split = path.split(separator);

        let current = data;

        while (split.length > 1) {
            const part = split.shift();

            if (!part) {
                return;
            }

            const parent = current;
            current = (current as any)[part];

            if (undefined === current) {
                (parent as any)[part] = {};
                current = (parent as any)[part];
            }
        }

        if (split.length === 1) {
            const part = split.shift();
            if (!part) {
                return;
            }
            (current as any)[part] = update;
        }

        return data;
    } catch (err) {
        return;
    }
}
