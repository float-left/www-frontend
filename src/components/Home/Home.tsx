import * as React from 'react';

interface HomeProps {
  title : string;
}

export function Home(props : HomeProps) : JSX.Element {
  return (
    <h1>{props.title}</h1>
  )
}
