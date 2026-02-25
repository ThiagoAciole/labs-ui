import React, { createContext, useContext } from 'react';
import './List.css';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';

export interface ListProps {
    children: React.ReactNode;
    variant?: 'default' | 'bordered' | 'divided' | 'checklist';
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

const ListContext = createContext<{ variant?: string }>({});

export const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
    children,
    variant = 'default',
    className,
    style
}) => {
    return (
        <ListContext.Provider value={{ variant }}>
            <div
                className={classNames(
                    'list',
                    `list--${variant}`,
                    className
                )}
                style={style}
                role="list"
            >
                {children}
            </div>
        </ListContext.Provider>
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
    const { variant } = useContext(ListContext);

    const resolvedStartContent = variant === 'checklist' && !startContent
        ? <Icon name="check" size={20} color='primary' className="list-item__check-icon" />
        : startContent;

    return (
        <div
            className={classNames(
                'list-item',
                active && 'list-item--active',
                onClick && !disabled && 'list-item--clickable',
                disabled && 'list-item--disabled',
                className
            )}
            style={style}
            onClick={disabled ? undefined : onClick}
            role="listitem"
            tabIndex={disabled ? -1 : (onClick ? 0 : undefined)}
        >
            {resolvedStartContent && (
                <div className="list-item__start">
                    {resolvedStartContent}
                </div>
            )}

            <div className="list-item__content">
                <span className="list-item__title">{children}</span>
                {description && (
                    <span className="list-item__description">{description}</span>
                )}
            </div>

            {endContent && (
                <div className="list-item__end">
                    {endContent}
                </div>
            )}
        </div>
    );
};

List.Item = ListItem;





