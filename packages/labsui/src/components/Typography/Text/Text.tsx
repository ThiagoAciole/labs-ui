import '../TypographyTokens.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { colorVar, fontSizeVar, fontWeightVar, type TokenColor, type TokenSize, type TokenWeight } from '../../../utils/styleTokens';

export type TextSize = TokenSize;
export type TextWeight = TokenWeight;
export type TextColor = TokenColor;
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
    color = 'gray',
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
                'labs-text',
                `labs-text--${size}`,
                `labs-text--${weight}`,
                `labs-text--${align}`,
                className
            )}
            style={{
                color: colorVar(color),
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





