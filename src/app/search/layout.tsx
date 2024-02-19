import WebPageSearch from '@/Components/WebPageSearch';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
    <header >
        <WebPageSearch />
        <hr className='mt-6' />
    </header>
    <div>{children}</div>
    </>
  );
}
export default Layout;
