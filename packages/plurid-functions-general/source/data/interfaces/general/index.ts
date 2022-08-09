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


/**
 * Based on https://dev.to/pffigueiredo/typescript-utility-keyof-nested-object-2pa3
 */
export type NestedKeyOf<ObjectType extends object> =
    {
        [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
            // @ts-expect-error :: Type instantiation is excessively deep and possibly infinite.
            ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
            : `${Key}`
    }[keyof ObjectType & (string | number)];
// #endregion module
