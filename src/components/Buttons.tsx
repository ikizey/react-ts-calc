import React, { MouseEvent } from 'react';
import { buttons } from '../data/buttons';
import CButton from './CButton';

type ButtonsProps = {
  clickHandle: (vent: MouseEvent<HTMLButtonElement>) => void;
};

const Buttons = (props: ButtonsProps) => {
  return (
    <React.Fragment>
      {' '}
      {buttons.map(button => (
        <CButton
          key={button.name}
          name={button.name}
          color={button.color}
          xs={button.xs}
          clickHandle={props.clickHandle}
        />
      ))}
    </React.Fragment>
  );
};

export default Buttons;
