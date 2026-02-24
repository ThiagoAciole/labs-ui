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
    leftIcon?: string;
    rightIcon?: string;
    closable?: boolean;
    onRemove?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export function Tag({ children, appearance = 'soft', size = 'md', color = 'primary', leftIcon, rightIcon, closable, onRemove, className, style }: TagProps) {
    const showRemove = closable || !!onRemove;
    return (
        <span className={classNames('labs-tag', `labs-tag--${appearance}`, `labs-tag--${size}`, className)} style={{ ['--labs-tag-color' as string]: colorVar(color), ...(style ?? {}) }}>
            {leftIcon && <Icon name={leftIcon} size={10} color={color} />}
            <span className="labs-tag__label">{children}</span>
            {rightIcon && <Icon name={rightIcon} size={10} color={color} />}
            {showRemove && <button type="button" className="labs-tag__remove" onClick={onRemove} aria-label="Remove tag"><Icon name="close" size={10} color={color} /></button>}
        </span>
    );
}

