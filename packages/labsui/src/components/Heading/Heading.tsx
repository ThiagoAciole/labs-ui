import '../Typography/TypographyTokens.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export type HeadingSize = 'xs' | 'sm' | 's' | 'm' | 'lg' | 'xl';
export type HeadingWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type HeadingColor = 'default' | 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'danger';
export type HeadingAlign = 'left' | 'center' | 'right';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    size?: HeadingSize;
    weight?: HeadingWeight;
    color?: HeadingColor;
    align?: HeadingAlign;
}

const sizeMap: Record<HeadingSize, string> = {
    xl: 'h1',
    lg: 'h2',
    m: 'h3',
    s: 'h4',
    sm: 'h5',
    xs: 'h6'
};

export const Heading: React.FC<HeadingProps> = ({
    size = 'xl',
    weight = 'bold',
    color = 'default',
    align = 'left',
    children,
    className,
    ...props
}) => {
    const Tag = (sizeMap[size as HeadingSize] || 'h2') as React.ElementType;
    return (
        <Tag
            className={classNames(
                'labs-heading',
                `labs-heading--${size}`,
                `labs-text--${weight}`,
                `labs-text--${color}`,
                `labs-text--${align}`,
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    );
};
