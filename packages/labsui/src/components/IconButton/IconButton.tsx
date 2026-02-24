import './IconButton.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Loader } from '../Loader/Loader';
import { Icon, IconName } from '../Icon/Icon';

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** Nome do ícone a ser renderizado */
    icon: IconName;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    loading?: boolean;
    /** Descrição acessível (opcional, assume o nome do ícone se omitido) */
    'aria-label'?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, variant = 'secondary', size = 'md', loading = false, disabled, className, 'aria-label': ariaLabel, ...props }, ref) => {
        // Escala o ícone baseado no tamanho do botão
        const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                aria-label={ariaLabel || icon}
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
                {loading ? <Loader size={size} /> : <Icon name={icon} size={iconSize} />}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';
