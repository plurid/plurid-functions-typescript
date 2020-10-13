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


/**
 * https://stackoverflow.com/a/40294058/6639124
 *
 * @param obj
 * @param hash
 */
const deepClone = (
    obj: any,
    hash = new WeakMap(),
): any => {
    if (Object(obj) !== obj) return obj; // primitives

    if (hash.has(obj)) return hash.get(obj); // cyclic reference

    const result = obj instanceof Set ? new Set(obj) // See note about this!
                 : obj instanceof Map ? new Map(Array.from(obj, ([key, val]) =>
                                        [key, deepClone(val, hash)]))
                 : obj instanceof Date ? new Date(obj)
                 : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
                 // ... add here any specific treatment for other classes ...
                 // and finally a catch-all:
                 : obj.constructor ? new obj.constructor()
                 : Object.create(null);

    hash.set(obj, result);

    return Object.assign(
        result,
        ...Object.keys(obj).map(
            key => ({ [key]: deepClone(obj[key], hash) })
        ),
    );
}


/**
 * Creates a deep clone of the `data`.
 *
 * The default `type` is `json`, meant for deep cloning of json-like objects.
 * The `any` `type` will handle a deep clone of `Function`, `Date`, and more.
 *
 * @param data
 * @param type
 */
export const clone = <D>(
    data: D,
    type?: 'json' | 'any',
): D => {
    if (!type || type === 'json') {
        const cloned = JSON.parse(
            JSON.stringify(data),
        );

        return cloned;
    }

    const deepCloned = deepClone(data);

    return deepCloned;
}
