import { checkForText } from '../client/js/textChecker';

describe('check input validity function', () => {
    test('test the output of textChecker', () => {
        const validText = 'here goes a text just to test the text checker';
        const invalidText = 'here goes an invalid 498489489 text!!';
        expect(checkForText(validText)).toBe(true);
        // This test will fail if the same output "true" is passed , passes if "false" is passed
        expect(checkForText(invalidText)).toBe(false);
    });
});
