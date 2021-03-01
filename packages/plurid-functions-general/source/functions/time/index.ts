// #region module
const now = () => {
    return Math.floor(
        Date.now() / 1000,
    );
}


const stamp = () => {
    const date = new Date();

    return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
}
// #endregion module



// #region exports
export {
    now,
    stamp,
};
// #endregion exports
