import './Tag.css';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../components/Icon/Icon';

export type TagVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
export type TagSize = 'sm' | 'md';

export interface TagProps {
    children: React.ReactNode;
    variant?: TagVariant;
    size?: TagSize;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    closable?: boolean;
    onRemove?: () => void;
    className?: string;
}

export function Tag({ children, variant = 'default', size = 'md', leftIcon, rightIcon, closable, onRemove, className }: TagProps) {
    const showRemove = closable || !!onRemove;

    return (
        <span className={classNames('labs-tag', `labs-tag--${variant}`, `labs-tag--${size}`, className)}>
            {leftIcon && <span className="labs-tag__icon labs-tag__icon--left">{leftIcon}</span>}
            <span className="labs-tag__label">{children}</span>
            {rightIcon && <span className="labs-tag__icon labs-tag__icon--right">{rightIcon}</span>}
            {showRemove && (
                <button
                    type="button"
                    className="labs-tag__remove"
                    onClick={onRemove}
                    aria-label="Remove tag"
                >
                    <Icon name="close" size={10} />
                </button>
            )}
        </span>
    );
}
