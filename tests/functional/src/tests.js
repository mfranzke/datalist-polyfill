/* global browser $ $$ */
/* eslint-env mocha */

const assert = require('assert');

var keysSelect = [
	{ keyName: 'ESC', unicodeChars: '\uE00C' },
	{ keyName: 'ENTER', unicodeChars: '\uE007' },
	{ keyName: 'BACKSPACE', unicodeChars: '\uE003' },
	{ keyName: 'TAB', unicodeChars: '\uE004' },
];
var keysInput = [
	{ keyName: 'DOWN', unicodeChars: '\uE015' },
	{ keyName: 'UP', unicodeChars: '\uE013' },
];

browser.url('index.html');

describe('input field #' + field.fieldId, function () {
	beforeEach(function () {
		$('#' + field.fieldId).waitForDisplayed(5000);

		// Setting a value within the input field
		$('#' + field.fieldId).setValue(field.initialValue);

		// Select should be visible
		assert.ok($('#' + field.fieldId + 'list select').isDisplayed());
	});
	it('should provide suggestions after inserting the value "' + field.initialValue + '"', function () {
		// Assert number of results
		assert.lengthOf($$('#' + field.fieldId + 'list select option:not(:disabled)'), 1);
	});
	it('should not provide suggestions after inserting the value "' + field.wrongValue + '"', function () {
		// Setting a value within the input field
		$('#' + field.fieldId).setValue(field.wrongValue);

		// Select should not be visible
		assert.isNotOk($('#' + field.fieldId + 'list select').isDisplayed());

		// Assert number of results
		assert.lengthOf($$('#' + field.fieldId + 'list select option:not(:disabled)'), 0);
	});
	it(
		'should provide suggestions after inserting the value "' +
			field.initialValue +
			'" and deleting these again bit by bit afterwards',
		function () {
			browser.keys('\uE003');

			// Assert number of results
			assert.lengthOf($$('#' + field.fieldId + 'list select option:not(:disabled)'), field.expectedAmount);

			// Select should be visible
			assert.ok($('#' + field.fieldId + 'list select').isDisplayed());

			// Setting a value within the input field
			browser
				.setValue('#' + field.fieldId, field.initialValue)
				.keys('\uE003')
				.keys('\uE003');

			// Select should not be visible
			assert.isNotOk($('#' + field.fieldId + 'list select').isDisplayed());
		}
	);
	keysInput.forEach(function (actKey) {
		it('should work with the key "' + actKey.keyName + '"', function () {
			browser.keys(actKey.unicodeChars);

			// Select should be visible
			assert.ok($('#' + field.fieldId + 'list select').isDisplayed());

			if (field.fieldId === 'number') {
				// Check for whether the select has focus
				assert.isNotOk($('#' + field.fieldId + 'list select').isFocused());
			} else {
				// Check for whether the select has focus
				assert.ok($('#' + field.fieldId + 'list select').isFocused());

				// Check for the selected element
				var options = $$('#' + field.fieldId + 'list select option:not(:disabled)'),
					optionsLength = options.length,
					option = actKey.keyName === 'DOWN' ? options[0] : options[optionsLength - 1];

				assert.ok(option.isSelected());
			}
		});
	});

	if (field.fieldId !== 'number') {
		keysSelect.forEach(function (actKey) {
			it('datalists element should work with the key "' + actKey.keyName + '"', function () {
				var inputInitialValue = $('#' + field.fieldId).isDisplayed('value');

				// Focus the select
				browser.keys('\uE015');

				// Check for whether the select has focus
				assert.ok($('#' + field.fieldId + 'list select').isFocused());

				// Press the key to test
				browser.keys(actKey.unicodeChars);

				// Check for whether the select has focus
				assert.isNotOk($('#' + field.fieldId + 'list select').isFocused());

				// Check for visibility
				if (actKey.keyName === 'BACKSPACE') {
					assert.ok($('#' + field.fieldId + 'list select').isDisplayed());
				} else {
					assert.isNotOk($('#' + field.fieldId + 'list select').isDisplayed());
				}

				// Check for the inputs values
				switch (actKey.keyName) {
					case 'ESC':
						assert.ok($('#' + field.fieldId).getAttribute('value') === inputInitialValue);
						break;
					case 'BACKSPACE':
						assert.ok($('#' + field.fieldId).getAttribute('value') === inputInitialValue.slice(0, -1));
						break;
					default:
						assert.ok(
							$('#' + field.fieldId).getAttribute('value') ===
								$('#' + field.fieldId + 'list select option:checked').getAttribute('value')
						);
						break;
				}
			});
		});
	}

	it('should set the value on clicking on the suggestions select', function () {
		// Delete the last byte to ensure that there's more than one option/suggestion
		browser.keys('\uE003');

		// Click the selected element with the suggestions select
		$('#' + field.fieldId + 'list select').click();

		// Check for whether the select has focus
		assert.isNotOk($('#' + field.fieldId + 'list select').isFocused());

		// Check for visibility
		assert.isNotOk($('#' + field.fieldId + 'list select').isDisplayed());

		// Check for the inputs values
		assert.ok(
			$('#' + field.fieldId).getAttribute('value') ===
				$('#' + field.fieldId + 'list select option:checked').getAttribute('value')
		);
	});
});
