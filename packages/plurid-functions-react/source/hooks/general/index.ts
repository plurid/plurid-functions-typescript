// #region imports
    // #region libraries
    import React, {
        useState,
        useEffect,
    } from 'react';
    // #endregion libraries
// #region imports



// #region module
const useFalseAfterTimedTrue = (
    intervalTime = 2_000, // ms
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    // #region state
    const [
        disabledAfterActivation,
        setDisabledAfterActivation,
    ] = useState(false);
    // #endregion state

    // #region effects
    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;

        if (disabledAfterActivation) {
            timeout = setTimeout(() => {
                setDisabledAfterActivation(false);
            }, intervalTime);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
        }
    }, [
        disabledAfterActivation,
    ]);
    // #endregion effects

    // #region return
    return [
        disabledAfterActivation,
        setDisabledAfterActivation,
    ];
    // #endregion return
}
// #endregion module



// #region exports
export {
    useFalseAfterTimedTrue,
};
// #endregion exports
