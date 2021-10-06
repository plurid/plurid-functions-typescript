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
// #endregion module
