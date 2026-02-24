import './Button.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Loader } from '../../Feedback/Loader/Loader';
import { Icon } from '../../Typography/Icon/Icon';
import { colorVar, type TokenColor } from '../../../utils/styleTokens';

export type ButtonAppearance = 'solid' | 'soft' | 'ghost' | 'outline';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: ButtonAppearance;
    size?: ButtonSize;
    loading?: boolean;
    icon?: string;
    full?: boolean;
    color?: TokenColor;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ appearance = 'solid', size = 'md', loading = false, disabled, icon, full = false, color = 'primary', children, className, style, ...props }, ref) => {
        const isDisabled = disabled || loading;
        const iconSize = size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'lg' || size === 'xl' ? 24 : 20;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading}
                className={classNames('labs-btn', `labs-btn--${appearance}`, `labs-btn--${size}`, full && 'labs-btn--full', loading && 'labs-btn--loading', className)}
                style={{
                    ['--labs-btn-color' as string]: colorVar(color),
                    ...(style ?? {})
                }}
                {...props}
            >
                {loading && <Loader size="sm" className="labs-btn__spinner" color={color} />}
                {!loading && icon && (
                    <span className="labs-btn__icon labs-btn__icon--left">
                        <Icon name={icon} size={iconSize} color="inherit" />
                    </span>
                )}
                {children && <span className="labs-btn__label">{children}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';

