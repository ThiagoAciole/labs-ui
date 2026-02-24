import './IconButton.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Loader } from '../../Feedback/Loader/Loader';
import { Icon, IconName } from '../../Typography/Icon/Icon';
import { colorVar, type TokenColor } from '../../../utils/styleTokens';

export type IconButtonAppearance = 'solid' | 'soft' | 'ghost' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    icon: IconName;
    appearance?: IconButtonAppearance;
    size?: IconButtonSize;
    loading?: boolean;
    color?: TokenColor;
    'aria-label'?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, appearance = 'soft', size = 'md', loading = false, color = 'primary', disabled, className, style, 'aria-label': ariaLabel, ...props }, ref) => {
        const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                aria-label={ariaLabel || icon}
                aria-busy={loading}
                className={classNames('labs-icon-btn', `labs-icon-btn--${appearance}`, `labs-icon-btn--${size}`, loading && 'labs-icon-btn--loading', className)}
                style={{ ['--labs-icon-btn-color' as string]: colorVar(color), ...(style ?? {}) }}
                {...props}
            >
                {loading ? <Loader size={size} color={color} /> : <Icon name={icon} size={iconSize} color="inherit" />}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';
