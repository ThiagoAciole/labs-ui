import './Badge.css';
import { classNames } from '../../../utils/classNames';
import { colorVar, type TokenColor, type TokenSize } from '../../../utils/styleTokens';

export type BadgeVariant = 'soft' | 'outline';
export type BadgeSize = TokenSize;

export interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    color?: TokenColor;
    children: React.ReactNode;
    dot?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export function Badge({ variant = 'soft', size = 'md', color = 'primary', children, dot = false, className, style }: BadgeProps) {
    return (
        <span className={classNames('labs-badge', `labs-badge--variant-${variant}`, `labs-badge--size-${size}`, dot && 'labs-badge--dot', className)} style={{ ['--labs-badge-color' as string]: colorVar(color), ...(style ?? {}) }}>
            {dot && <span className="labs-badge__dot" />}
            {children}
        </span>
    );
}

