import React from 'react';
import './List.css';
import { classNames } from '../../utils/classNames';

export interface ListProps {
    children: React.ReactNode;
    variant?: 'default' | 'bordered' | 'divided';
    className?: string;
    style?: React.CSSProperties;
}

export interface ListItemProps {
    children: React.ReactNode;
    description?: React.ReactNode;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
    children,
    variant = 'default',
    className,
    style
}) => {
    return (
        <div
            className={classNames(
                'labs-list',
                `labs-list--${variant}`,
                className
            )}
            style={style}
            role="list"
        >
            {children}
        </div>
    );
};

export const ListItem: React.FC<ListItemProps> = ({
    children,
    description,
    startContent,
    endContent,
    active,
    disabled,
    onClick,
    className,
    style
}) => {
    return (
        <div
            className={classNames(
                'labs-list-item',
                active && 'labs-list-item--active',
                onClick && !disabled && 'labs-list-item--clickable',
                disabled && 'labs-list-item--disabled',
                className
            )}
            style={style}
            onClick={disabled ? undefined : onClick}
            role="listitem"
            tabIndex={disabled ? -1 : (onClick ? 0 : undefined)}
        >
            {startContent && (
                <div className="labs-list-item__start">
                    {startContent}
                </div>
            )}

            <div className="labs-list-item__content">
                <span className="labs-list-item__title">{children}</span>
                {description && (
                    <span className="labs-list-item__description">{description}</span>
                )}
            </div>

            {endContent && (
                <div className="labs-list-item__end">
                    {endContent}
                </div>
            )}
        </div>
    );
};

List.Item = ListItem;
