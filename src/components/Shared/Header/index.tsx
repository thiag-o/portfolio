import React from 'react';

import useWindowSize from '@/hooks/useWindowSize';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
  const [width] = useWindowSize();

  return <>{width >= 768 ? <HeaderDesktop /> : <HeaderMobile />}</>;
}
