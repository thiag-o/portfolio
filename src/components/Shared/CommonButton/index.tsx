import { HTMLMotionProps } from 'framer-motion';
import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

interface ICommonButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
}

export default function CommonButton({
  children,
  ...rest
}: ICommonButtonProps) {
  return <Button {...rest}>{children}</Button>;
}
