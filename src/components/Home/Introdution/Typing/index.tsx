import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { DescriptionPerson } from './styles';

export default function Typing() {
  return (
    <DescriptionPerson>
      <TypeAnimation
        sequence={[
          'Um programador.',
          2000,
          'Um desenvolvedor web.',
          2000,
          'Um desenvolvedor front-end.',
          2000,
        ]}
        className="texting"
        wrapper="span"
        speed={40}
        repeat={Infinity}
      />
    </DescriptionPerson>
  );
}
