import React, { Fragment } from 'react'

import Link from 'next/link'

export function Nav(props: any) : JSX.Element {
  return (
    <Fragment>
      <Link href="/"><a>Home</a></Link>
      <nav className='nav'>
        {props.links.map(({ href, name }) => <Link href={href}><a>{name}</a></Link> )}
      </nav>
    </Fragment>
  )
}
