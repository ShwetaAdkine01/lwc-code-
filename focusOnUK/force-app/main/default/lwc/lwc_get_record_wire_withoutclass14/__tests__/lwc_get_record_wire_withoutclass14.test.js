import { createElement } from 'lwc';
import Lwc_get_record_wire_withoutclass14 from 'c/lwc_get_record_wire_withoutclass14';

describe('c-lwc-get-record-wire-withoutclass14', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-get-record-wire-withoutclass14', {
            is: Lwc_get_record_wire_withoutclass14
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});