import clsx from 'clsx';
import { ReactNode } from 'react';

export interface SummaryTableCellProps {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}

export default function SummaryTableCell({
  align,
  children,
}: SummaryTableCellProps) {
  return (
    <td
      className={clsx(
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l',
        `text-${align}`,
      )}
    >
      {children}
    </td>
  );
}
