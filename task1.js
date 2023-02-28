function stringLength(string) {
    const length = string.length;
    if (length < 1 || length > 10) {
      throw new Error('String length should be between 1 and 10 characters');
    }
    return length;
  }
  
  // Test for the initial function
  test('returns correct string length', () => {
    expect(stringLength('hello')).toBe(5);
  });
  
  // Tests for the expanded function
  test('throws error when string is empty', () => {
    expect(() => stringLength('')).toThrow('String length should be between 1 and 10 characters');
  });
  
  test('throws error when string is too long', () => {
    expect(() => stringLength('this string is too long')).toThrow('String length should be between 1 and 10 characters');
  });
  
  test('returns correct string length when string is 10 characters long', () => {
    expect(stringLength('1234567890')).toBe(10);
  });
  