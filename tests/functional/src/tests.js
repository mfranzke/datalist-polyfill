var expect = require('chai').expect;

var keysSelect = [
	{ keyName: 'ESC', unicodeChars: '\uE00C' },
	{ keyName: 'ENTER', unicodeChars: '\uE007' },
	{ keyName: 'BACKSPACE', unicodeChars: '\uE003' },
	{ keyName: 'TAB', unicodeChars: '\uE004' }
];
var keysInput = [{ keyName: 'DOWN', unicodeChars: '\uE015' }, { keyName: 'UP', unicodeChars: '\uE013' }];

browser.url('index.html');

describe('input field #' + field.fieldId, function() {
	beforeEach(function() {
		browser.waitForVisible('#' + field.fieldId, 8000);

		// Setting a value within the input field
		browser.setValue('#' + field.fieldId, field.initialValue);

		// Select should be visible
		expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.true;
	});
	it('should provide suggestions after inserting the value "' + field.initialValue + '"', function() {
		// Assert number of results
		expect($$('#' + field.fieldId + 'list select option:not(:disabled)')).to.have.lengthOf(1);
	});
	it('should not provide suggestions after inserting the value "' + field.wrongValue + '"', function() {
		// Setting a value within the input field
		$('#' + field.fieldId).setValue(field.wrongValue);

		// Select should not be visible
		expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.false;

		// Assert number of results
		expect($$('#' + field.fieldId + 'list select option:not(:disabled)')).to.have.lengthOf(0);
	});
	it(
		'should provide suggestions after inserting the value "' +
			field.initialValue +
			'" and deleting these again bit by bit afterwards',
		function() {
			browser.keys('\uE003');

			// Assert number of results
			expect($$('#' + field.fieldId + 'list select option:not(:disabled)')).to.have.lengthOf(field.expectedAmount);

			// Select should be visible
			expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.true;

			// Setting a value within the input field
			browser
				.setValue('#' + field.fieldId, field.initialValue)
				.keys('\uE003')
				.keys('\uE003');

			// Select should not be visible
			expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.false;
		}
	);
	keysInput.forEach(function(actKey) {
		it('should work with the key "' + actKey.keyName + '"', function() {
			browser.keys(actKey.unicodeChars);

			// Select should be visible
			expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.true;

			if (field.fieldId === 'number') {
				// Check for whether the select has focus
				expect(browser.hasFocus('#' + field.fieldId + 'list select')).to.be.false;
			} else {
				// Check for whether the select has focus
				expect(browser.hasFocus('#' + field.fieldId + 'list select')).to.be.true;

				// Check for the selected element
				var options = $$('#' + field.fieldId + 'list select option:not(:disabled)'),
					optionsLength = options.length,
					option = actKey.keyName === 'DOWN' ? options[0] : options[optionsLength - 1];

				expect(option.isSelected()).to.be.true;
			}
		});
	});

	if (field.fieldId !== 'number') {
		keysSelect.forEach(function(actKey) {
			it('datalists element should work with the key "' + actKey.keyName + '"', function() {
				var inputInitialValue = browser.getAttribute('#' + field.fieldId, 'value');

				// Focus the select
				browser.keys('\uE015');

				// Check for whether the select has focus
				expect(browser.hasFocus('#' + field.fieldId + 'list select')).to.be.true;

				// Press the key to test
				browser.keys(actKey.unicodeChars);

				// Check for whether the select has focus
				expect(browser.hasFocus('#' + field.fieldId + 'list select')).to.be.false;

				// Check for visibility
				if (actKey.keyName === 'BACKSPACE') {
					expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.true;
				} else {
					expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.false;
				}

				// Check for the inputs values
				switch (actKey.keyName) {
					case 'ESC':
						expect(browser.getAttribute('#' + field.fieldId, 'value') === inputInitialValue).to.be.true;
						break;
					case 'BACKSPACE':
						expect(
							browser.getAttribute('#' + field.fieldId, 'value') ===
								inputInitialValue.substr(0, inputInitialValue.length - 1)
						).to.be.true;
						break;
					default:
						expect(
							browser.getAttribute('#' + field.fieldId, 'value') ===
								browser.getAttribute('#' + field.fieldId + 'list select option:checked', 'value')
						).to.be.true;
						break;
				}
			});
		});
	}
	/*
	// TODO: integrate this test regarding clicking the select entries correctly
	it('should set the value on clicking on the suggestions select', function() {
		// Delete the last byte to ensure that there's more than one option/suggestion
		browser.keys('\uE003');

		// Click the selected element with the suggestions select
		browser.click('#' + field.fieldId + 'list select');

		// Check for whether the select has focus
		expect(browser.hasFocus('#' + field.fieldId + 'list select')).to.be.false;

		// Check for visibility
		expect(browser.isVisible('#' + field.fieldId + 'list select')).to.be.false;

		// Check for the inputs values
		expect(browser.getAttribute('#' + field.fieldId, 'value') === browser.getAttribute('#' + field.fieldId + 'list select option:checked', 'value')).to.be.true;
	});
	*/
});
