import './Button.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Loader } from '../Loader/Loader';
import { Icon } from '../Icon/Icon';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'danger'
    | 'outline';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: string;        // ✅ apenas nome do ícone
    full?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            loading = false,
            disabled,
            icon,
            full = false,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || loading;

        const iconSize =
            size === 'sm'
                ? 16
                : size === 'lg'
                    ? 24
                    : 20;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading}
                className={classNames(
                    'labs-btn',
                    `labs-btn--${variant}`,
                    `labs-btn--${size}`,
                    full && 'labs-btn--full',
                    loading && 'labs-btn--loading',
                    className
                )}
                {...props}
            >
                {/* Loading */}
                {loading && (
                    <Loader size="sm" className="labs-btn__spinner" />
                )}

                {/* Icon Left */}
                {!loading && icon && (
                    <span className="labs-btn__icon labs-btn__icon--left">
                        <Icon name={icon} size={iconSize} />
                    </span>
                )}

                {/* Label */}
                {children && (
                    <span className="labs-btn__label">
                        {children}
                    </span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';