import { uuidv4 } from '../uuid';



describe('uuidv4', () => {
    // handle crypto for jest - https://stackoverflow.com/a/52612372
    const crypto = require('crypto');
    Object.defineProperty((global as any).self, 'crypto', {
    value: {
        getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
    },
    });

    it('generates random uuid', () => {
        const uuid = uuidv4();
        expect(uuid.length).toBe(32);
    });

    it('generates random uuid with separator', () => {
        const uuid = uuidv4('-');
        expect(uuid.length).toBe(36);
    });
});
