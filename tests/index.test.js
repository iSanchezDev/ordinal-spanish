/* global it, describe, beforeEach, afterEach, expect */

import ordinal from '../src/index';

describe('developer tests', () => {

  test('Units', () => {
    expect(ordinal(1)).toEqual('primero');
    expect(ordinal(2)).toEqual('segundo');
    expect(ordinal(3)).toEqual('tercero');
    expect(ordinal(4)).toEqual('cuarto');
    expect(ordinal(5)).toEqual('quinto');
    expect(ordinal(6)).toEqual('sexto');
    expect(ordinal(7)).toEqual('séptimo');
    expect(ordinal(8)).toEqual('octavo');
    expect(ordinal(9)).toEqual('noveno');
  });

  test('Tens', () => {
    expect(ordinal(10)).toEqual('décimo');
    expect(ordinal(20)).toEqual('vigésimo');
    expect(ordinal(30)).toEqual('trigésimo');
    expect(ordinal(40)).toEqual('cuadragésimo');
    expect(ordinal(50)).toEqual('quincuagésimo');
    expect(ordinal(60)).toEqual('sexagésimo');
    expect(ordinal(70)).toEqual('septuagésimo');
    expect(ordinal(80)).toEqual('octogésimo');
    expect(ordinal(90)).toEqual('nonagésimo');
  });

  test('Hundreds', () => {
    expect(ordinal(100)).toEqual('centésimo');
    expect(ordinal(200)).toEqual('ducentésimo');
    expect(ordinal(300)).toEqual('tricentésimo');
    expect(ordinal(400)).toEqual('cuadrigentésimo');
    expect(ordinal(500)).toEqual('quingentésimo');
    expect(ordinal(600)).toEqual('sexcentésimo');
    expect(ordinal(700)).toEqual('septingentésimo');
    expect(ordinal(800)).toEqual('octigentésimo');
    expect(ordinal(900)).toEqual('noningentésimo');
  });

  test('Thousands', () => {
    expect(ordinal(1000)).toEqual('milésimo');
  });
});
