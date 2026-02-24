import React from 'react';
import './EmptyState.css';
import { classNames } from '../../../utils/classNames';

interface EmptyStateProps {
    icon?: React.ReactNode;
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
        <div className={classNames('labs-empty-state', className)} style={style}>
            {icon && <div className="labs-empty-state__icon">{icon}</div>}
            <h3 className="labs-empty-state__title">{title}</h3>
            {description && <p className="labs-empty-state__description">{description}</p>}
            {action && <div className="labs-empty-state__action">{action}</div>}
        </div>
    );
};





