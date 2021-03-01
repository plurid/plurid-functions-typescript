// #region module
const stamp = () => {
    const date = new Date();

    return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
}
// #endregion module



// #region exports
export {
    stamp,
};
// #endregion exports
