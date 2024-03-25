function formatImages(text){
    const { altText, imageUrl, title } = separateImageParts(text);

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
        return null;
    }
}

module.exports = formatImages;
