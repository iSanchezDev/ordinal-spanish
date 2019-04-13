// @ts-check

import converter from './converter';

export default function ordinal (number) {
    if (typeof number !== 'number') {
        throw new TypeError('Expected Number, got ' + (typeof number));
    }
    return converter(number);
}
