import '../Typography/TypographyTokens.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type HeadingColor = 'default' | 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'danger';
export type HeadingAlign = 'left' | 'center' | 'right';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    size?: HeadingSize;
    weight?: HeadingWeight;
    color?: HeadingColor;
    align?: HeadingAlign;
}

export const Heading: React.FC<HeadingProps> = ({
    size = 1,
    weight = 'bold',
    color = 'default',
    align = 'left',
    children,
    className,
    ...props
}) => {
    const Tag = `h${size}` as React.ElementType;
    return (
        <Tag
            className={classNames(
                'labs-heading',
                `labs-heading--h${size}`,
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
