import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-sans font-light tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            // Variants
            'bg-navy-500 text-sand-50 hover:bg-navy-400 active:scale-[0.98]': variant === 'primary',
            'bg-sand-300 text-navy-500 hover:bg-sand-400 active:scale-[0.98]': variant === 'secondary',
            'border border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-sand-50 active:scale-[0.98]': variant === 'outline',
            'text-navy-500 hover:text-terracotta-500 underline-offset-2 hover:underline': variant === 'ghost',
            // Sizes
            'text-xs px-4 py-2': size === 'sm',
            'text-sm px-6 py-3': size === 'md',
            'text-base px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {children}
          </span>
        ) : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
