import React from 'react';

export interface ServerCopyComponentProps {
  children?: React.ReactNode;
}

export default function ServerCopyComponent({
  children,
}: ServerCopyComponentProps) {
  console.log('Server Copy Component');

  return (
    <div>
      <span>Server Copy Component</span>
      {children}
    </div>
  );
}
