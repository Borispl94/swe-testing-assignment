import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './calculatorLogic';

describe('Calculator Core Logic', () => {
  it('correctly adds two numbers', () => expect(add(5, 3)).toBe(8));
  it('correctly adds negative numbers', () => expect(add(-5, -3)).toBe(-8));
  it('correctly subtracts two numbers', () => expect(subtract(10, 4)).toBe(6));
  it('handles subtraction resulting in negative', () => expect(subtract(4, 10)).toBe(-6));
  it('correctly multiplies two numbers', () => expect(multiply(6, 7)).toBe(42));
  it('correctly multiplies by zero', () => expect(multiply(5, 0)).toBe(0));
  it('correctly divides two numbers', () => expect(divide(10, 2)).toBe(5));
  it('handles division by zero gracefully', () => expect(divide(10, 0)).toBe('Error'));
});