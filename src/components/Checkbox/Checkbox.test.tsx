import { shallow } from 'enzyme'
import * as React from 'react'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders the checkbox with correct label', () => {
    // Arrange
    const expected = 'Is this car available?'

    // Act
    const result = shallow(
      <Checkbox
        rootID="NiceCarCheckbox"
        id="CarAvailability"
        name="is_available"
        value="yes"
        label="Is this car available?"
      />
    ).find('#NiceCarCheckbox').find('label').text()

    // Assert

      expect(result).toEqual(expected)
  });
});
