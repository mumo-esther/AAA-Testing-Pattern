function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  // Test for the function
  test('reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  