import '../Typography/TypographyTokens.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'default' | 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'danger';
export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    align?: TextAlign;
    as?: React.ElementType;
}

export const Text: React.FC<TextProps> = ({
    size = 'md',
    weight = 'regular',
    color = 'default',
    align = 'left',
    as: Component = 'span',
    children,
    className,
    ...props
}) => {
    return (
        <Component
            className={classNames(
                'labs-text',
                `labs-text--${size}`,
                `labs-text--${weight}`,
                `labs-text--${color}`,
                `labs-text--${align}`,
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
