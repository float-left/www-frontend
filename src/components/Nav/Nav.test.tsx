import { LinkState } from 'next/link'
import { shallow } from 'enzyme'
import * as React from 'react'

import { Nav } from './Nav'

describe('Nav', () => {
  it('should render expected content', () => {
    // Arrange
    const links = [{
      href: '/about'
    }];

    // Act
    const result = {
      links: shallow(<Nav links={links}/>).find('.nav a'),
      nav: shallow(<Nav links={links}/>).find('.nav')
    }

    // Assert
    expect(result.links).toHaveLength(links.length)
    expect(result.nav).toBeDefined()
  });
});
