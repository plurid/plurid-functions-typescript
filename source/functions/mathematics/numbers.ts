/**
 * Return true if `value` is an integer
 * but not equal to `1`.
 *
 * @param value
 */
export const checkIntegerNonUnit = (
    value: number,
) => {
    if (
        Number.isInteger(value)
        && value !== 1
    ) {
        return true;
    }

    return false;
}
