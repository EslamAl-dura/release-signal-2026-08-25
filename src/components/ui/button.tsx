import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' };

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={cn('inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-signal/40 disabled:cursor-not-allowed disabled:opacity-50', variant === 'primary' && 'bg-signal text-white hover:bg-teal-700', variant === 'outline' && 'border border-slate-200 bg-white text-ink hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800', variant === 'ghost' && 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800', className)} {...props} />;
}