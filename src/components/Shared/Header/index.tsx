import React from 'react';

import useWindowSize from '~/hooks/useWindowSize';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
  return (
    <>
      <HeaderDesktop /> <HeaderMobile />
    </>
  );
}
