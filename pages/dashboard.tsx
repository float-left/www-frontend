import { Home, Nav } from '../src/components'
import { Fragment } from 'react'

export default () => (
  <Fragment>
    <Nav links={[{ href: '/about', name: '/About'}, { href: '/dashboard', name: 'Dashboard'}]}/>
    <Home title="Dashboard"/>
  </Fragment>
)
