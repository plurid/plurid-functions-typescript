export const loadImage = (url: string, anonymous: boolean = true) => {
    return new Promise(
        (response) => {
            const image = new Image();
            image.onload = (() => response(image));
            if (anonymous) {
                image.crossOrigin = 'anonymous';
            }
            image.src = url;
        },
    );
};
