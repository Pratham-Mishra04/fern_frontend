export const extractHashTags = (caption:string) =>{
    const regex = /#\w+/g;
    const hashTags = [];

    let match;
    while ((match = regex.exec(caption))) {
        hashTags.push(match[0]);
    }
    const hashTagsWithoutHashTag: string[] = [];
    hashTags.forEach((hashTag) => {
        hashTagsWithoutHashTag.push(hashTag.slice(1));
    });

    return hashTagsWithoutHashTag
}