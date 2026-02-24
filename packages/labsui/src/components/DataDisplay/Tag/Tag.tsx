import './Tag.css';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';
import { colorVar, type TokenColor, type TokenSize } from '../../../utils/styleTokens';

export type TagAppearance = 'soft' | 'outline';
export type TagSize = Extract<TokenSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export interface TagProps {
    children: React.ReactNode;
    appearance?: TagAppearance;
    size?: TagSize;
    color?: TokenColor;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    closable?: boolean;
    onRemove?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export function Tag({ children, appearance = 'soft', size = 'md', color = 'violet', leftIcon, rightIcon, closable, onRemove, className, style }: TagProps) {
    const showRemove = closable || !!onRemove;
    return (
        <span className={classNames('labs-tag', `labs-tag--${appearance}`, `labs-tag--${size}`, className)} style={{ ['--labs-tag-color' as string]: colorVar(color), ...(style ?? {}) }}>
            {leftIcon && <span className="labs-tag__icon labs-tag__icon--left">{leftIcon}</span>}
            <span className="labs-tag__label">{children}</span>
            {rightIcon && <span className="labs-tag__icon labs-tag__icon--right">{rightIcon}</span>}
            {showRemove && <button type="button" className="labs-tag__remove" onClick={onRemove} aria-label="Remove tag"><Icon name="close" size={10} /></button>}
        </span>
    );
}

