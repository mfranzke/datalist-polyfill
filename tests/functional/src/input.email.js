var field = { fieldId: 'email', initialValue: '@r', expectedAmount: 4, wrongValue: 'doe1' };

// @codekit-append 'tests.js';

describe('input field #' + field.fieldId + ' - extended', function() {
	beforeEach(function() {
		browser.waitForVisible('#' + field.fieldId, 8000);

		// Setting a value within the input field
		browser.setValue('#' + field.fieldId, field.initialValue);

		// Select should be visible
		expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.true;
	});
	it('should provide suggestions after inserting the value "john@doe,moss"', function() {
		// Setting a value within the input field
		browser.setValue('#' + field.fieldId, 'john@doe,moss');

		// Assert number of results
		expect($$('#' + field.fieldId + 'list select option:not(:disabled)')).to.have.lengthOf(1);

		// Check for the suggestions value
		expect(browser.getAttribute('#' + field.fieldId + 'list select option:not(:disabled)', 'value')).to.equal(
			'moss.m@reynholm.co.uk'
		);
	});
});
