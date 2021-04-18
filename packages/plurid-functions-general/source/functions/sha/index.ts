// #region module
const compute = (
    data: string,
    algorithm = 'sha256',
) => {
    const crypto = require('crypto');

    return crypto
        .createHash(algorithm)
        .update(data)
        .digest('hex');
}
// #endregion module



// #region exports
export {
    compute,
};
// #endregion exports
