import { createElement } from 'lwc';
import Track_using_indivisual_call5 from 'c/track_using_indivisual_call5';

describe('c-track-using-indivisual-call5', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-track-using-indivisual-call5', {
            is: Track_using_indivisual_call5
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});