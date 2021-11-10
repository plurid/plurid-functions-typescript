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


/**
 * Downloads `content` as file with `filename`.
 *
 * @param filename
 * @param content
 * @param dataString default `'data:text/plain;charset=utf-8,'`
 */
export const downloadContent = (
    filename: string,
    content: string,
    dataString = 'data:text/plain;charset=utf-8,',
) => {
    const element = document.createElement('a');
    element.setAttribute(
        'href',
        dataString + encodeURIComponent(content),
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
// #endregion module
