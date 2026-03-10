import '../TypographyTokens.css';
import './Code.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { textColorVar, fontSizeVar, fontWeightVar, type TokenSize, type TokenTextColor, type TokenWeight } from '../../../utils/styleTokens';

export type CodeSize = TokenSize;
export type CodeWeight = TokenWeight;
export type CodeColor = TokenTextColor;

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    size?: CodeSize;
    weight?: CodeWeight;
    color?: CodeColor;
    as?: React.ElementType;
    block?: boolean;
}

export const Code: React.FC<CodeProps> = ({
    size = 'sm',
    weight = 'medium',
    color = 'default',
    as: Component = 'code',
    block = false,
    children,
    className,
    style,
    ...props
}) => {
    return (
        <Component
            className={classNames(
                'code',
                `code--${size}`,
                `code--${weight}`,
                block && 'code--block',
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

Code.displayName = 'Code';

