// const debounce = require('../debounce')
const debounce = require('lodash').debounce

jest.useFakeTimers();

describe('debounce', () => {
  let func;
  let debounced;

  beforeEach(() => {
    func = jest.fn();
    debounced = debounce(func, 1000);
  });

  test('execute just once', () => {
    for (let i = 0; i < 100; i++) {
      debounced();
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});