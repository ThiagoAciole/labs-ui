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

export type IconName =
    | 'activity' | 'alert-circle' | 'alert-triangle' | 'align-horizontal' | 'align-justify'
    | 'app-window' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up'
    | 'badge' | 'battery' | 'bell' | 'bluetooth' | 'box'
    | 'calendar' | 'camera' | 'check-square' | 'check' | 'chevron-down'
    | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron' | 'circle-dot'
    | 'clock' | 'close' | 'cloud' | 'component' | 'copy'
    | 'credit-card' | 'database' | 'download' | 'edit' | 'external-link'
    | 'eye-off' | 'eye' | 'file-text' | 'file' | 'filter'
    | 'folder' | 'form-input' | 'ghost' | 'gift' | 'git-commit'
    | 'github' | 'grid' | 'grip' | 'heading1' | 'heart'
    | 'help-circle' | 'history' | 'home' | 'image' | 'info'
    | 'lab' | 'laptop' | 'layout-template' | 'link' | 'linkedin'
    | 'list-checks' | 'list-collapse' | 'list-filter' | 'list' | 'loader2'
    | 'lock' | 'log-in' | 'log-out' | 'mail' | 'map-pin'
    | 'menu' | 'message-circle' | 'message-square' | 'mic' | 'milestone'
    | 'minus' | 'monitor' | 'moon' | 'more-horizontal' | 'mouse-pointer'
    | 'music' | 'panel-left' | 'panel-top' | 'phone' | 'plus'
    | 'rectangle-horizontal' | 'refresh' | 'rocket' | 'ruler' | 'search'
    | 'server' | 'settings' | 'share' | 'shopping-cart' | 'sliders-horizontal'
    | 'smartphone' | 'spark' | 'sparkles' | 'spinner' | 'square'
    | 'star' | 'sun' | 'table' | 'tablet' | 'tag'
    | 'text-cursor' | 'theme-dark' | 'theme-light' | 'toggle-right' | 'trash'
    | 'type' | 'unlock' | 'upload-cloud' | 'upload' | 'user-circle'
    | 'user' | 'video' | 'warning' | 'wifi' | 'x'
    | 'code' | 'layout'
    | (string & {});

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
