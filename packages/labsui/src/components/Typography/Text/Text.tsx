import '../TypographyTokens.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { textColorVar, fontSizeVar, fontWeightVar, type TokenSize, type TokenTextColor, type TokenWeight } from '../../../utils/styleTokens';

export type TextSize = TokenSize;
export type TextWeight = TokenWeight;
export type TextColor = TokenTextColor;
export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    align?: TextAlign;
    as?: React.ElementType;
    htmlFor?: string;
}

export const Text: React.FC<TextProps> = ({
    size = 'md',
    weight = 'regular',
    color = 'default',
    align = 'left',
    as: Component = 'span',
    children,
    className,
    style,
    ...props
}) => {
    return (
        <Component
            className={classNames(
                'text',
                `text--${size}`,
                `text--${weight}`,
                `text--${align}`,
                className
            )}
            style={{
                color: textColorVar(color),
                fontSize: fontSizeVar(size),
                fontWeight: fontWeightVar(weight),
                ...(style ?? {})
            }}
            {...props}
        >
            {children}
        </Component>
    );
};





