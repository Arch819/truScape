import clsx from 'clsx';
import { ReactNode } from 'react';

export interface SummaryTableHeaderProps {
  align?: 'left' | 'right' | 'center';
  children: ReactNode;
}

export default function SummaryTableHeader({
  align,
  children,
}: SummaryTableHeaderProps) {
  return (
    <th
      className={clsx(
        'py-2 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm',
        `text-${align}`,
        '[&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900',
        '[&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2):bg-purple-200]',
        '[&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200',
      )}
    >
      {children}
    </th>
  );
}