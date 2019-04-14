// @ts-check

/**
 * @description Add current ordinal number plus the new value
 * @param ordinal current value
 * @param value next value
 * */
export function concatOrdinal(ordinal, value) {
    if (ordinal !== '') return `${ordinal} ${value}`;
    return value;
}

/**
 * @description Get units of a number and concat the current gender
 * @param n number input
 * @param g gender to concat the last word
 * */
export function getUnit (n, g) {
    let value = '';
    switch (n) {
        case 1:
            value = 'primer';
            break;
        case 2:
            value = 'segund';
            break;
        case 3:
            value = 'tercer';
            break;
        case 4:
            value = 'cuart';
            break;
        case 5:
            value = 'quint';
            break;
        case 6:
            value = 'sext';
            break;
        case 7:
            value = 'séptim';
            break;
        case 8:
            value = 'octav';
            break;
        case 9:
            value = 'noven';
            break;
        default:
    }
    return `${value}${g}`;
}


export function getTens (n, g) {
    let value = '';
    switch (n) {
        case 1:
            value = 'décim';
            break;
        case 2:
            value = 'vigésim';
            break;
        case 3:
            value = 'trigésim';
            break;
        case 4:
            value = 'cuadragésim';
            break;
        case 5:
            value = 'quincuagésim';
            break;
        case 6:
            value = 'sexagésim';
            break;
        case 7:
            value = 'septuagésim';
            break;
        case 8:
            value = 'octogésim';
            break;
        case 9:
            value = 'nonagésim';
            break;
        default:
    }
    return `${value}${g}`;
}


export function getHundreds (n, g) {
    let value = '';
    switch (n) {
        case 1:
            value = 'centésim';
            break;
        case 2:
            value = 'ducentésim';
            break;
        case 3:
            value = 'tricentésim';
            break;
        case 4:
            value = 'cuadrigentésim';
            break;
        case 5:
            value = 'quingentésim';
            break;
        case 6:
            value = 'sexcentésim';
            break;
        case 7:
            value = 'septingentésim';
            break;
        case 8:
            value = 'octigentésim';
            break;
        case 9:
            value = 'noningentésim';
            break;
        default:
    }
    return `${value}${g}`;
}

export function getThousands (n, g) {
    let value = '';
    switch (n) {
        case 1:
            value = 'milésim';
            break;
        case 2:
            value = 'dosmilésim';
            break;
        case 3:
            value = 'tresmilésim';
            break;
        case 4:
            value = 'cuatromilésim';
            break;
        case 5:
            value = 'cincomilésim';
            break;
        case 6:
            value = 'seismilésim';
            break;
        case 7:
            value = 'sietemilésim';
            break;
        case 8:
            value = 'ochomilésim';
            break;
        case 9:
            value = 'nuevemilésim';
            break;
        default:
    }
    return `${value}${g}`;
}
