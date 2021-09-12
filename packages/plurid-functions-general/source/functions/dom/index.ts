// #region module
export const placeCaretAtEnd = (
    el: any,
) => {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel: any = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof (document as any).body.createTextRange !== "undefined") {
        var textRange = (document as any).body!.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}


/**
 * Gets the event path cross-browser.
 *
 * Based on https://stackoverflow.com/a/39245638
 *
 * @param event
 */
export const getEventPath = (
    event: any,
) => {
    return event.path || (event.composedPath && event.composedPath());
}



export const verifyPathInputElement = (
    path: any[],
) => {
    if (!path) {
        return false;
    }

    let input = false;

    path.some(element => {
        if (
            element.tagName === 'INPUT'
            || element.tagName === 'TEXTAREA'
            || element.contentEditable === 'true'
        ) {
            input = true;
            return true;
        }
        return false;
    })

    return input;
}
// #endregion module
