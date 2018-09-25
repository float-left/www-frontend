import { shallow } from 'enzyme'
import * as React from 'react'

import { Home } from './Home'

describe('Home', () => {
  it('should render expected content', () => {
    // Arrange
    const expected = 'Home'

    // Act
    const result = shallow(<Home title="Home"/>).find('h1').text()

    // Assert

      expect(result).toEqual(expected)
  });
});
