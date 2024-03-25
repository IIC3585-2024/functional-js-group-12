function formatImages(text){
    const { altText, imageUrl, title } = separateImageParts(text);

    console.log(altText, imageUrl, title);

    return `<img src="${imageUrl}" alt="${altText}" title="${title}" />`;
}

function separateImageParts(markdownImage) {
    const regex = /!\[([^\]]*)]\(([^")]+)(?:\s"([^"]+)")?\)/;
    const match = markdownImage.match(regex);

    if (match) {
        const altText = match[1];
        const imageUrl = match[2];
        const title = match[3] || null;
        return { altText, imageUrl, title };
    } else {
        return null; // Return null if the input doesn't match the expected format
    }
}

// console.log(formatImages('![alt text](https://www.google.com "title")'));

module.exports = formatImages;