import './Card.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Icon, IconName } from '../../Typography/Icon/Icon';
import { Heading } from '../../Typography/Heading/Heading';
import { Text } from '../../Typography/Text/Text';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'ghost';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: CardPadding;
    variant?: CardVariant;
    as?: React.ElementType;
}

export function Card({ padding = 'md', variant = 'default', as: Component = 'div', children, className, ...props }: CardProps) {
    return (
        <Component
            className={classNames('labs-card', `labs-card--${variant}`, `labs-card--pad-${padding}`, className)}
            {...props}
        >
            {children}
        </Component>
    );
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: IconName;
    action?: React.ReactNode;
}

export function CardHeader({ title, description, icon, action, children, className, ...props }: CardHeaderProps) {
    return (
        <div className={classNames('labs-card-header', className)} {...props}>
            <div className="labs-card-header__content">
                {(title || icon) && (
                    <div className="labs-card-header__title-wrapper">
                        {icon && <Icon name={icon} className="labs-card-header__icon" />}
                        {title && (
                            <Heading
                                size="sm"
                                className="labs-card-header__title"
                            >
                                {title}
                            </Heading>
                        )}
                    </div>
                )}
                {description && (
                    <Text
                        size="sm"
                        color="muted"
                        className="labs-card-header__description"
                    >
                        {description}
                    </Text>
                )}
                {children}
            </div>
            {action && <div className="labs-card-header__action">{action}</div>}
        </div>
    );
}

export function CardBody({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={classNames('labs-card-body', className)} {...props}>{children}</div>;
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={classNames('labs-card-footer', className)} {...props}>{children}</div>;
}





