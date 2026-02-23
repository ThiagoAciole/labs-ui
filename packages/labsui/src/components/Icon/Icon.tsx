import React from 'react';
import { classNames } from '../../utils/classNames';

// Carrega todos os SVGs da pasta icons automaticamente no build via Vite glob
const svgModules = import.meta.glob('../../icons/*.svg', { eager: true, query: '?react', import: 'default' });

const iconRegistry: Record<string, React.ElementType> = {};
for (const path in svgModules) {
    const name = path.replace('../../icons/', '').replace('.svg', '');
    iconRegistry[name] = svgModules[path] as React.ElementType;
}

export const availableIcons: string[] = Object.keys(iconRegistry).sort();

export type IconName = string;

export interface IconProps {
    name: IconName;
    size?: number | string;
    color?: string;
    className?: string;
    'aria-hidden'?: boolean;
    'aria-label'?: string;
}

export const Icon: React.FC<IconProps> = ({
    name,
    size = 20,
    color,
    className,
    'aria-hidden': ariaHidden = true,
    'aria-label': ariaLabel,
}) => {
    const SvgIcon = iconRegistry[name];

    if (!SvgIcon) {
        console.warn(`Icon "${name}" not found in icons directory.`);
        return null;
    }

    // Adaptável para Dark/Light consumindo o currentColor ou variável de contexto do app
    const iconColor = color || 'currentColor';

    return (
        <span
            className={classNames('labs-icon-wrapper', className)}
            aria-hidden={ariaHidden}
            aria-label={ariaLabel}
            role={ariaLabel ? 'img' : undefined}
            style={{
                display: 'inline-flex',
                color: iconColor,
                width: size,
                height: size,
                alignItems: 'center',
            }}
        >
            <SvgIcon width="100%" height="100%" />
        </span>
    );
};

export default Icon;
