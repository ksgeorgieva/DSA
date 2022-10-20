const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtHeights = [6, 9, 2, 4, 5];

const classPhotos = (redShirtHeights, blueShirtHeights) => {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);

    const blueShirtsInTheBack = blueShirtHeights[0] > redShirtHeights[0];

    for (let i = 0; i < redShirtHeights.length; i++) {
        const redShirt = redShirtHeights[i];
        const blueShirt = blueShirtHeights[i];

        if (blueShirtsInTheBack && redShirt >= blueShirt) {
            return false;
        }

        if (!blueShirtsInTheBack && redShirt <= blueShirt) {
            return false;
        }
    };

    return true;
};

const isPicturePossible = classPhotos(redShirtHeights, blueShirtHeights);
console.log(isPicturePossible);
