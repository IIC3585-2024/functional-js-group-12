function separateLinkAndText(hyperlink) {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/;
    const match = hyperlink.match(regex);
    
    if (match) {
        const link = match[2];
        const name = match[1];
        return { link, name };
    } else {
        return null;
    }
}

module.exports = separateLinkAndText;
