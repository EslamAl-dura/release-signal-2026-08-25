import type { SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) { return <select className={cn('h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-ink outline-none focus:border-signal focus:ring-2 focus:ring-signal/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white', className)} {...props} />; }