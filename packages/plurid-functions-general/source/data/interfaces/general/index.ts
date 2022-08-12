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



export type OmitKeyOrKeyList<
    O extends object,
    K extends NestedKeyOf<O> | NestedKeyOf<O>[]
> = K extends `${infer U}` ? {
    [K in keyof Omit<O, U>]: O[K];
} : K[number] extends `${infer U}` ? {
    [K in keyof Omit<O, U>]: O[K];
} : never;


export type RecursiveOmit<O = any, P = any> = any;

// export type RecursiveOmit<
//     ObjectType extends object,
//     Omits extends NestedKeyOf<ObjectType> | NestedKeyOf<ObjectType>[],
// > = {
//     [Key in keyof Omit<
//         ObjectType,
//         Omits extends NestedKeyOf<ObjectType>[]
//             ? Omits[number]
//             : Omits
//     >]: ObjectType[Key] extends object
//         ? RecursiveOmit<
//             ObjectType[Key],
//             Omits extends NestedKeyOf<ObjectType>[]
//                 ? any
//                 : Omits
//         > : ObjectType[Key];
// }
// #endregion module
