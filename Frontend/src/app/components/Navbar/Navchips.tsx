'use client';

import Link from 'next/link';
import clsx from 'clsx';

interface NavChipProps {
  href: string;
  label: string;
  letter: string;
  isActive: boolean;
}

export function NavChip({ href, label, letter, isActive }: NavChipProps) {
  return (
    <Link href={href} passHref>
      <span
        tabIndex={0}
        className={clsx(
          'group flex items-center gap-1 rounded-full px-2 py-1 transition-colors outline-none cursor-pointer select-none text-xs',
          'bg-transparent text-gray-800',
          'hover:bg-indigo-50 hover:text-indigo-700 focus-visible:bg-indigo-50 focus-visible:text-indigo-700',
          isActive && 'text-indigo-700 font-regular'
        )}
      >
        <span
          className={clsx(
            'flex items-center justify-center w-5 h-5 rounded-sm text-[11px] font-medium transition-colors border',
            isActive
              ? 'border-indigo-400 text-indigo-700'
              : 'border-gray-200 text-gray-400',
            'group-hover:border-indigo-400 group-hover:text-indigo-700 group-focus-visible:border-indigo-400 group-focus-visible:text-indigo-700',
            'bg-transparent'
          )}
        >
          {letter}
        </span>
        {label}
      </span>
    </Link>
  );
}