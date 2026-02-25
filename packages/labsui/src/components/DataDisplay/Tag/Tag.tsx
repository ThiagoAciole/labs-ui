import './Tag.css';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';
import { colorVar, type TokenColor, type TokenSize } from '../../../utils/styleTokens';

export type TagVariant = 'soft' | 'outline';
export type TagSize = Extract<TokenSize, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export interface TagProps {
    children: React.ReactNode;
    variant?: TagVariant;
    size?: TagSize;
    color?: TokenColor;
    leftIcon?: string;
    rightIcon?: string;
    closable?: boolean;
    onRemove?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export function Tag({ children, variant = 'soft', size = 'md', color = 'primary', leftIcon, rightIcon, closable, onRemove, className, style }: TagProps) {
    const showRemove = closable || !!onRemove;
    return (
        <span className={classNames('tag', `tag--variant-${variant}`, `tag--size-${size}`, className)} style={{ ['--tag-color' as string]: colorVar(color), ...(style ?? {}) }}>
            {leftIcon && <Icon name={leftIcon} size={10} color={color} />}
            <span className="tag__label">{children}</span>
            {rightIcon && <Icon name={rightIcon} size={10} color={color} />}
            {showRemove && <button type="button" className="tag__remove" onClick={onRemove} aria-label="Remove tag"><Icon name="close" size={10} color={color} /></button>}
        </span>
    );
}

