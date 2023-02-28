class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  describe('Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe('add', () => {
      test('returns the sum of two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test('returns the sum of negative numbers', () => {
        expect(calculator.add(-2, -3)).toBe(-5);
      });
  
      test('returns the sum of a positive and a negative number', () => {
        expect(calculator.add(2, -3)).toBe(-1);
      });
    });
  
    describe('subtract', () => {
      test('returns the difference between two numbers', () => {
        expect(calculator.subtract(3, 2)).toBe(1);
      });
  
      test('returns the difference between negative numbers', () => {
        expect(calculator.subtract(-2, -3)).toBe(1);
      });
  
      test('returns the difference between a positive and a negative number', () => {
        expect(calculator.subtract(2, -3)).toBe(5);
      });
    });
  
    describe('divide', () => {
      test('returns the quotient of two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
      });
  
      test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(2, 0)).toThrow('Cannot divide by zero');
      });
  
      test('returns the quotient of negative numbers', () => {
        expect(calculator.divide(-6, -3)).toBe(2);
      });
    });
  
    describe('multiply', () => {
      test('returns the product of two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      test('returns the product of negative numbers', () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
  
      test('returns the product of a positive and a negative number', ()=> {
        expect(calculator.multiply(2, -3)).toBe(-6);
        });
        });
        });  