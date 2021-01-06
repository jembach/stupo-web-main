import React from 'react';
import Navigation from './Navigation';

function Header({
  children,
  className,
  img,
  alt,
}: {
  className: string;
  img: string;
  alt: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className={`w-screen ${className}`}>
      <Navigation />
      <div className="flex justify-between container mx-auto pt-16">
        <div className="flex-1 flex items-center -mt-16 pr-8">{children}</div>
        <div className="w-1/2 flex items-end">
          <img src={img} alt={alt} className="w-full" style={{ maxHeight: 450 }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
