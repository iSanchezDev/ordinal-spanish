/* global it, describe, beforeEach, afterEach, expect */

import ordinal from '../src/index';

describe('developer tests', () => {

  test('Ordinal', () => {
    expect(ordinal(10)).toEqual('décimo');
  });
});
