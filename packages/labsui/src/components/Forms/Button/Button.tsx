import './Button.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Loader } from '../../Feedback/Loader/Loader';
import { Icon } from '../../Typography/Icon/Icon';
import { colorVar, type TokenColor } from '../../../utils/styleTokens';

export type ButtonVariant = 'solid' | 'soft' | 'ghost' | 'outline';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: string;
    full?: boolean;
    color?: TokenColor;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'solid', size = 'md', loading = false, disabled, icon, full = false, color = 'primary', children, className, style, ...props }, ref) => {
        const isDisabled = disabled || loading;
        const iconSize = size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' || size === 'xl' ? 24 : 20;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading}
                className={classNames('btn', `btn--variant-${variant}`, `btn--size-${size}`, full && 'btn--full', loading && 'btn--loading', className)}
                style={{
                    ['--btn-color' as string]: colorVar(color),
                    ...(style ?? {})
                }}
                {...props}
            >
                {loading && <Loader size="sm" className="btn__spinner" color={color} />}
                {!loading && icon && (
                    <span className="btn__icon btn__icon--left">
                        <Icon name={icon} size={iconSize} color="inherit" />
                    </span>
                )}
                {children && <span className="btn__label">{children}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

