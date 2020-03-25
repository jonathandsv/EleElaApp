import React from 'react';

// import { Container } from './styles';

export default function Button({title, classeEspecifica}) {

  let classes = 'buttonPrincipal alinharButton';
  if (classeEspecifica) {
    classes += ` ${classeEspecifica}`;
  }

  return (
    <button class={classes}><span>{title} </span></button>
  );
}


