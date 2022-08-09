// #region module
/**
 * Based on https://stackoverflow.com/a/56416192/6639124
 */
export type AllValues<T extends Record<PropertyKey, PropertyKey>> = {
    [P in keyof T]: { key: P, value: T[P] }
}[keyof T]


export type InvertResult<T extends Record<PropertyKey, PropertyKey>> = {
    [P in AllValues<T>['value']]: Extract<AllValues<T>, { value: P }>['key']
}


export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
// #endregion module
