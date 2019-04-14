// @ts-check

import converter from './converter';

function ordinal (number, gender = 'male') {

    if (typeof number !== 'number') {
        throw new TypeError(`Expected Number, got ${(typeof number)} ${number}`);
    }

    if (!(number >= 1 && number <= 9999)) {
        throw new TypeError(`Expected Number between 1 and 1000, got ${number}`);
    }

    if (typeof gender !== 'string') {
        throw new TypeError(`Expected String, got ${(typeof gender)} ${gender}`);
    }

    if (gender !== 'female' && gender !== 'male') {
        throw new TypeError(`Expected male or female, got ${gender}`);
    }

    return converter(number, gender);
}

ordinal.converter = converter;
module.exports = ordinal;
