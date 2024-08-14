import { dogToHumanAge } from './dogAgeCalc';

describe('dogToHumanAge', () => {
  it('should return 7 when given 1', () => {
    const result = dogToHumanAge(1);
    expect(result).toBe(7);
  });
  it('handles invalid input', () => {
    const result = dogToHumanAge('a');
    expect(result).toBe('Invalid input');
  });
});
