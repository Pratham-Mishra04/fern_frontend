const getIcon = (str: string) => {
    const validInputs = ['github'];
    if (validInputs.includes(str)) return str;
    return 'link';
};

export default getIcon;