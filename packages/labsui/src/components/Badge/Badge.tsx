import './Badge.css';
import { classNames } from '../../utils/classNames';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    children: React.ReactNode;
    dot?: boolean;
    className?: string;
}

export function Badge({ variant = 'default', size = 'md', children, dot = false, className }: BadgeProps) {
    return (
        <span className={classNames('labs-badge', `labs-badge--${variant}`, `labs-badge--${size}`, dot && 'labs-badge--dot', className)}>
            {dot && <span className="labs-badge__dot" />}
            {children}
        </span>
    );
}
