import {handleSubmit} from '../src/client/js/formHandler';


describe("Ensure there's a formHandler function", () => {
  test('does formHandler exist?', () => {
      expect(handleSubmit).toBeDefined();
  });
});
