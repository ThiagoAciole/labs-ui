import './Avatar.css';
import React, { useState } from 'react';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    initials?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
    bordered?: boolean;
    fallbackIcon?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    initials,
    size = 'md',
    shape = 'circle',
    bordered = false,
    fallbackIcon = 'user',
    className,
    ...props
}) => {
    const [hasError, setHasError] = useState(false);

    return (
        <div
            className={classNames(
                'avatar',
                `avatar--${size}`,
                `avatar--${shape}`,
                bordered && 'avatar--bordered',
                className
            )}
            {...props}
        >
            {src && !hasError ? (
                <img
                    src={src}
                    alt={alt}
                    className="avatar__image"
                    onError={() => setHasError(true)}
                />
            ) : initials ? (
                <span className="avatar__initials">{initials.substring(0, 2)}</span>
            ) : (
                <div className="avatar__fallback">
                    <Icon name={fallbackIcon as any} size={size === 'xl' ? 48 : size === 'lg' ? 32 : 20} />
                </div>
            )}
        </div>
    );
};

Avatar.displayName = 'Avatar';





