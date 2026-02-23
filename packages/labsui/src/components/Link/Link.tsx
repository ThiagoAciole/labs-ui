import './Link.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export type LinkVariant = 'default' | 'muted' | 'accent' | 'danger';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: LinkVariant;
    underline?: boolean;
    active?: boolean;
    as?: React.ElementType;
}

export const Link: React.FC<LinkProps> = ({
    variant = 'default',
    underline = false,
    active = false,
    as: Component = 'a',
    className,
    children,
    ...props
}) => {
    return (
        <Component
            className={classNames(
                'labs-link',
                `labs-link--${variant}`,
                underline && 'labs-link--underline',
                active && 'labs-link--active',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

Link.displayName = 'Link';
