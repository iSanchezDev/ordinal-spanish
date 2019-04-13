// @ts-check

export default function converter (number) {

    let ordinal = '';

    if (number <= 10) {
        ordinal = 'décimo';
    }

    return ordinal;
};
