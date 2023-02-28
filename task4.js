function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    // Test for the function
    test('capitalizes the first character', () => {
    expect(capitalize('hello')).toBe('Hello');
    });