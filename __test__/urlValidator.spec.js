import urlValidator from '../src/client/js/urlValidator';

describe("Testing the URL Validator functionality", () => {
  test('Testing the urlValidator() function', () => {
      expect(urlValidator).toBeDefined();
  });

  test('Testing urlValidator', () => {
      expect(urlValidator('https://www.giantbomb.com/reviews/control-pc-review/1900-792/')).toBe(true);
  });

  test('Testing urlValidator', () => {
      expect(urlValidator('httpz://www.giantbomb.com/reviews/control-pc-review/1900-792/')).toBe(false);
  });
});
