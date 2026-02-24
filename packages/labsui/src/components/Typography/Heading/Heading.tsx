import '../TypographyTokens.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { colorVar, fontWeightVar, type TokenColor, type TokenWeight } from '../../../utils/styleTokens';

export type HeadingSize = 'xs' | 'sm' | 's' | 'md' | 'm' | 'lg' | 'xl';
export type HeadingWeight = TokenWeight;
export type HeadingColor = TokenColor;
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
    md: 'h3',
    m: 'h3',
    s: 'h4',
    sm: 'h5',
    xs: 'h6'
};

export const Heading: React.FC<HeadingProps> = ({
    size = 'xl',
    weight = 'bold',
    color = 'gray',
    align = 'left',
    children,
    className,
    style,
    ...props
}) => {
    const Tag = (sizeMap[size as HeadingSize] || 'h2') as React.ElementType;
    return (
        <Tag
            className={classNames(
                'labs-heading',
                `labs-heading--${size}`,
                `labs-text--${align}`,
                className
            )}
            style={{
                color: colorVar(color),
                fontWeight: fontWeightVar(weight),
                ...(style ?? {})
            }}
            {...props}
        >
            {children}
        </Tag>
    );
};





