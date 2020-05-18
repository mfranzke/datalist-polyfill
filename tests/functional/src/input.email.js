var field = { fieldId: 'email', initialValue: '@r', expectedAmount: 4, wrongValue: 'doe1' };

// @codekit-append 'tests.js';

/* TODO: The following additional test needs to get fixed as it doesn't work at the moment
describe('input field #' + field.fieldId + ' - extended', function() {
	beforeEach(function() {
		$('#' + field.fieldId).waitForDisplayed(5000);

		// Setting a value within the input field
		$('#' + field.fieldId).setValue(field.initialValue);

		// Select should be visible
		assert.ok($('#' + field.fieldId + 'list select').isDisplayed());
	});
	it('should provide suggestions after inserting the value "john@doe,moss"', function() {
		// Setting a value within the input field
		$('#' + field.fieldId).setValue('john@doe,moss');


		// Assert number of results
		assert.lengthOf($$('#' + field.fieldId + 'list select option:not(:disabled)'), 1);

		// Check for the suggestions value
		assert.equal(
			$('#' + field.fieldId + 'list select option:not(:disabled)').getAttribute('value'),
			'moss.m@reynholm.co.uk'
		);
	});
});
*/
