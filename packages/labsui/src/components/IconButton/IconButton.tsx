import './IconButton.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Loader } from '../Loader/Loader';

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    loading?: boolean;
    'aria-label': string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, variant = 'secondary', size = 'md', loading = false, disabled, className, 'aria-label': ariaLabel, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                aria-label={ariaLabel}
                aria-busy={loading}
                className={classNames(
                    'labs-icon-btn',
                    `labs-icon-btn--${variant}`,
                    `labs-icon-btn--${size}`,
                    loading && 'labs-icon-btn--loading',
                    className
                )}
                {...props}
            >
                {loading ? <Loader size="sm" /> : icon}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';
