import './IconButton.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Loader } from '../../Feedback/Loader/Loader';
import { Icon, IconName } from '../../Typography/Icon/Icon';
import { colorVar, type TokenColor } from '../../../utils/styleTokens';

export type IconButtonVariant = 'solid' | 'soft' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    icon: IconName;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    loading?: boolean;
    color?: TokenColor;
    'aria-label'?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, variant = 'soft', size = 'md', loading = false, color = 'primary', disabled, className, style, 'aria-label': ariaLabel, ...props }, ref) => {
        const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                aria-label={ariaLabel || icon}
                aria-busy={loading}
                className={classNames('icon-btn', `icon-btn--variant-${variant}`, `icon-btn--size-${size}`, loading && 'icon-btn--loading', className)}
                style={{ ['--icon-btn-color' as string]: colorVar(color), ...(style ?? {}) }}
                {...props}
            >
                {loading ? <Loader size={size} color={color} /> : <Icon name={icon} size={iconSize} color="inherit" />}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';
