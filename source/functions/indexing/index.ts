import {
    uuidv4 as uuid,
} from '../uuid';



export interface WithID {
    id: string;
}

export type IdentifiedByID<T> = T & WithID;

export interface Indexed<T> {
    [key: string]: T;
}


/**
 * Identify `items` by an `idEntity` property.
 *
 * @param items
 * @param idEntity
 */
export const identify = <T>(
    items: T[],
    /**
     * Identify items by a certain property. Default `id`.
     */
    idEntity?: string,
) => {
    const idProperty = idEntity || 'id';

    type Identified = {
        [property in typeof idProperty]: string;
    }
    type IdentifiedT = T & Identified;


    const identifiedItems = items.map(item => {
        const idValue: string = item[idProperty] || uuid();

        const identifiedItem = {
            ...item,
        };
        identifiedItem[idProperty] = idValue;

        return identifiedItem as IdentifiedT;
    });

    return identifiedItems;
}



/**
 * Create an index of `items`.
 *
 * @param items
 * @param idEntity
 */
export const create = <T>(
    items: T[],
    /**
     * Identify items by a certain property. Default `id`.
     */
    idEntity?: string,
) => {
    const id = idEntity || 'id';

    type Identified = {
        [prop in typeof id]: string;
    }
    type IdentifiedT = T & Identified;

    const indexedItems: Indexed<IdentifiedT> = {};

    for (const item of items) {
        const itemID: string | undefined = item[id];
        if (!itemID) {
            continue;
        }

        indexedItems[itemID] = item as IdentifiedT;
    }

    return indexedItems;
}
