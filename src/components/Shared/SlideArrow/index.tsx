import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';

import { Arrow } from './styles';

interface ISlideArrowProps {
  direction: 'next' | 'prev';

  [key: string]: any;
}

export default function SlideArrow({ direction, ...rest }: ISlideArrowProps) {
  return (
    <Arrow {...rest}>
      {direction === 'next' ? (
        <CaretRight size={32} />
      ) : (
        <CaretLeft size={32} />
      )}
    </Arrow>
  );
}
