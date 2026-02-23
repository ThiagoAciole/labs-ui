import './Tag.css';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../components/Icon/Icon';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type TagSize = 'sm' | 'md';

export interface TagProps {
    children: React.ReactNode;
    variant?: TagVariant;
    size?: TagSize;
    onRemove?: () => void;
    className?: string;
}

export function Tag({ children, variant = 'default', size = 'md', onRemove, className }: TagProps) {
    return (
        <span className={classNames('labs-tag', `labs-tag--${variant}`, `labs-tag--${size}`, className)}>
            <span className="labs-tag__label">{children}</span>
            {onRemove && (
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
