import React from 'react';

type Tag = keyof JSX.IntrinsicElements;

interface HeadingProps {
  as?: Tag;
  className?: string;
  children: React.ReactNode;
}

export function Heading({ as: Component = 'h1', className = '', children }: HeadingProps) {
  return (
    <Component className={className}>
      {children}
    </Component>
  );
}