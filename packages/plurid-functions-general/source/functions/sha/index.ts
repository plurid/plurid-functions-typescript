// #region imports
    // #region libraries
    import crypto from 'crypto';
    // #endregion libraries
// #endregion imports



// #region module
const compute = (
    data: string,
    algorithm = 'sha256',
) => {
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
