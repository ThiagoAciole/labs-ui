import React from 'react';
import './EmptyState.css';
import { classNames } from '../../../utils/classNames';
import { Heading, Icon, Text } from '../../Categories';

interface EmptyStateProps {
    icon?: string;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    action,
    className,
    style
}) => {
    return (
        <div className={classNames('empty-state', className)} style={style}>
            {icon && <div className="empty-state__icon"><Icon name={icon} size={48} color='neutral' /></div>}
            <Heading size="m">{title}</Heading>
            {description && <Text>{description}</Text>}
            {action && <div className="empty-state__action">{action}</div>}
        </div>
    );
};





