import React, { CSSProperties } from 'react';
import { classNames } from '../../../utils/classNames';
import { iconColorVar, type TokenIconColor } from '../../../utils/styleTokens';

const svgModules = import.meta.glob('../../../icons/*.svg', { eager: true, query: '?react', import: 'default' });

const iconRegistry: Record<string, React.ElementType> = {};
for (const path in svgModules) {
    const name = path.replace('../../../icons/', '').replace('.svg', '');
    iconRegistry[name] = svgModules[path] as React.ElementType;
}

export const availableIcons: string[] = Object.keys(iconRegistry).sort();

export type IconName = string;

export interface IconProps {
    name: IconName;
    size?: number | string;
    color?: TokenIconColor | string;
    className?: string;
    style?: CSSProperties; // 1. Adicionado aqui
    'aria-hidden'?: boolean;
    'aria-label'?: string;
}

export const Icon: React.FC<IconProps> = ({
    name,
    size = 20,
    color,
    className,
    style, // 2. Desestruturado aqui
    'aria-hidden': ariaHidden = true,
    'aria-label': ariaLabel,
}) => {
    const SvgIcon = iconRegistry[name];

    if (!SvgIcon) {
        console.warn(`Icon "${name}" not found in icons directory.`);
        return null;
    }

    const iconColor = (() => {
        if (!color) return iconColorVar('default');
        const tokenColor = iconColorVar(color as TokenIconColor);
        return tokenColor ?? color;
    })();

    return (
        <span
            className={classNames('icon-wrapper', className)}
            aria-hidden={ariaHidden}
            aria-label={ariaLabel}
            role={ariaLabel ? 'img' : undefined}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: iconColor,
                width: size,
                height: size,
                ...style, // 3. Spread do style original por último (sobrescreve se necessário)
            }}
        >
            <SvgIcon width="100%" height="100%" />
        </span>
    );
};

export default Icon;