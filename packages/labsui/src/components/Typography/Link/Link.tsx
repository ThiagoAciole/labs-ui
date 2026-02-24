import './Link.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { type TokenColor } from '../../../utils/styleTokens';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    color?: TokenColor;
    underline?: boolean;
    active?: boolean;
    as?: React.ElementType;
    to?: string;
}

export const Link: React.FC<LinkProps> = ({ color = 'primary', underline = false, active, as: Component = 'a', className, children, href, to, style, ...props }) => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const route = to ?? href;
    const normalizePath = (path: string) => {
        const pathname = path.split('?')[0].split('#')[0];
        return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    };
    const isCurrentRoute = route && currentPath ? normalizePath(currentPath) === normalizePath(route) : false;
    const isActive = active ?? isCurrentRoute;

    return (
        <Component
            className={classNames('labs-link', underline && 'labs-link--underline', isActive && 'labs-link--active', className)}
            style={{ ['--labs-link-color' as string]: `var(--color--${color})`, ...(style ?? {}) }}
            href={route}
            aria-current={isActive ? 'page' : undefined}
            {...props}
        >
            {children}
        </Component>
    );
};

Link.displayName = 'Link';

