import React from 'react';
import './Box.css';
import { classNames } from '../../../utils/classNames';

export interface BoxProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
    as?: React.ElementType;
    padding?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    surface?: 'default' | 'subtle' | 'raised' | 'inverse';
    border?: boolean;
}

export const Box = React.forwardRef<HTMLElement, BoxProps>(({
    as: Component = 'div',
    padding = '0',
    rounded = 'none',
    shadow = 'none',
    surface = 'default',
    border = false,
    className,
    children,
    ...props
}, ref) => {
    return (
        <Component
            ref={ref}
            className={classNames(
                'box',
                `box-padding--${padding}`,
                `box-rounded--${rounded}`,
                `box-shadow--${shadow}`,
                `box-surface--${surface}`,
                border && 'box--border',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
});

Box.displayName = 'Box';

