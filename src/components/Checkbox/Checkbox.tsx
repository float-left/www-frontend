import * as React from 'react';

interface CheckboxProps {
    rootID : string;
    id : string;
    name : string;
    value : string;
    label : string;
}

export default function Checkbox(props : CheckboxProps) : JSX.Element {
  return (
    <div className="Checkbox" id={props.rootID}>
      <input type="checkbox" id={props.id} name={props.name} value={props.value}/>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}
