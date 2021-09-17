// #region module
export const parseFromString = <T = any>(
    value: string,
) => {
    try {
        const data = JSON.parse(value);
        return data as T;
    } catch (error) {
        return value;
    }
}


export const stringifyOrDefault = (
    data: any,
) => {
    if (typeof data === 'undefined') {
        return undefined;
    }

    if (typeof data === 'string') {
        return data;
    }

    return JSON.stringify(
        data,
        (_, value) => typeof value === 'undefined' ? null : value,
    );
}
// #endregion module
