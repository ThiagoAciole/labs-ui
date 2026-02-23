import './Timeline.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Avatar } from '../Avatar/Avatar';

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
        <div className={classNames('labs-timeline-item', !logo && !initials && !icon && 'labs-timeline-item--dot')}>
            <div className="labs-timeline-item__left">
                <div className="labs-timeline-item__icon-wrapper">
                    {logo || initials ? (
                        <Avatar src={logo} initials={initials} size="md" />
                    ) : icon ? (
                        <div className="labs-timeline-item__custom-icon">{icon}</div>
                    ) : (
                        <div className="labs-timeline-item__dot" />
                    )}
                </div>
                <div className="labs-timeline-item__line-container" />
            </div>

            <div className="labs-timeline-item__content">
                <div className="labs-timeline-item__header">
                    <div className="labs-timeline-item__title">{title}</div>
                    {date && <div className="labs-timeline-item__date">{date}</div>}
                </div>
                {description && (
                    <div className="labs-timeline-item__description">{description}</div>
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
        <div className={classNames('labs-timeline', className)}>
            {children}
        </div>
    );
};

Timeline.displayName = 'Timeline';
TimelineItem.displayName = 'TimelineItem';
