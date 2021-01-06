import React from 'react';
import Navigation from './Navigation';

function Header({
  children,
  theme,
  img,
  alt,
}: {
  theme: string;
  img: string;
  alt: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className={`w-screen bg-${theme}-200`}>
      <Navigation theme={theme} />
      <div className="flex justify-between container mx-auto pt-16">
        <div className="flex-1 flex items-center -mt-16 md:pr-8 pb-8">{children}</div>
        <div className="flex w-1/4 md:w-1/2 items-end">
          <img src={img} alt={alt} className="w-full" style={{ maxHeight: 450 }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
