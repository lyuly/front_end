const judge = require('../判断回文')

describe('回文串的测试', function() {
  it('abcba是回文串，需要返回true', function() {
    expect(judge('abcba')).toBe(true)
  });
});