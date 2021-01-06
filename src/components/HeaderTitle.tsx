import React from 'react';

function HeaderTitle({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): JSX.Element {
  return (
    <span className="text-5xl leading-normal font-bold uppercase tracking-wide">{children}</span>
  );
}

export default HeaderTitle;
