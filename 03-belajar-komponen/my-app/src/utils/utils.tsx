export function getImageUrl(imageId: string, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

interface Person {
    name: string;
    imageId: string;
}

export function getImageUrlV2(person: Person, size: string) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}