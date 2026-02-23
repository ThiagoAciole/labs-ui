import './Button.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Loader } from '../Loader/Loader';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            loading = false,
            disabled,
            leftIcon,
            rightIcon,
            fullWidth = false,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading}
                className={classNames(
                    'labs-btn',
                    `labs-btn--${variant}`,
                    `labs-btn--${size}`,
                    fullWidth && 'labs-btn--full',
                    loading && 'labs-btn--loading',
                    className
                )}
                {...props}
            >
                {loading ? (
                    <Loader size="sm" className="labs-btn__spinner" />
                ) : leftIcon ? (
                    <span className="labs-btn__icon labs-btn__icon--left">{leftIcon}</span>
                ) : null}
                {children && <span className="labs-btn__label">{children}</span>}
                {!loading && rightIcon && (
                    <span className="labs-btn__icon labs-btn__icon--right">{rightIcon}</span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
