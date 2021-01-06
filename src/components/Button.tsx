import React from 'react';

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button
      className={`px-16 py-4 text-xl font-semibold shadow-lg rounded-md ${className || ''}`}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
