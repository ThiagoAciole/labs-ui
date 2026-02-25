import './Timeline.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Avatar } from '../../DataDisplay/Avatar/Avatar';

export interface TimelineItemProps {
    title: string;
    description?: React.ReactNode;
    date?: string;
    icon?: React.ReactNode;
    logo?: string;
    initials?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    description,
    date,
    icon,
    logo,
    initials
}) => {
    return (
        <div className={classNames('timeline-item', !logo && !initials && !icon && 'timeline-item--dot')}>
            <div className="timeline-item__left">
                <div className="timeline-item__icon-wrapper">
                    {logo || initials ? (
                        <Avatar src={logo} initials={initials} size="md" />
                    ) : icon ? (
                        <div className="timeline-item__custom-icon">{icon}</div>
                    ) : (
                        <div className="timeline-item__dot" />
                    )}
                </div>
                <div className="timeline-item__line-container" />
            </div>

            <div className="timeline-item__content">
                <div className="timeline-item__header">
                    <div className="timeline-item__title">{title}</div>
                    {date && <div className="timeline-item__date">{date}</div>}
                </div>
                {description && (
                    <div className="timeline-item__description">{description}</div>
                )}
            </div>
        </div>
    );
};

export interface TimelineProps {
    children: React.ReactNode;
    className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ children, className }) => {
    return (
        <div className={classNames('timeline', className)}>
            {children}
        </div>
    );
};

Timeline.displayName = 'Timeline';
TimelineItem.displayName = 'TimelineItem';





