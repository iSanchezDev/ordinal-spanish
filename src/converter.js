// @ts-check
import {
    concatOrdinal,
    getUnit,
    getTens,
    getHundreds,
    getThousands
} from './parser';


/**
 * @description This main function here gets the numbers and gender to proceed with the conversion
 * @param number from 1 to 1000
 * @param gender determine the end of any ordinal number
 * */
export default function converter (number, gender) {

    let value, ordinal = '';
    const pattern = /^[1-9]$/;
    const numberStr = number.toString();
    const numListRev = numberStr.split('').map((s) => parseFloat(s)).reverse();

    const g = gender === 'female' ? 'a' : 'o';

    for(let i = numberStr.length; i > 0; i--) {
        const n = numListRev[i-1];
        if (pattern.test(n.toString())) {
            if (i === 4) {
                value = getThousands(n, g);
            } else if (i === 3) {
                value = getHundreds(n, g);
            } else if (i === 2) {
                value = getTens(n, g);
            } else if (i === 1) {
                value = getUnit(n, g);
            }
            ordinal = concatOrdinal(ordinal, value);
        }
    }

    return ordinal;
};
