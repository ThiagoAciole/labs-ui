import React, { ReactNode } from 'react';
import { classNames } from '../../../utils/classNames';
import { Heading } from '../../Typography/Heading/Heading';
import { Icon } from '../../Typography/Icon/Icon';
import './Panel.css';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    title?: string;
    children: ReactNode;
    onToggle?: () => void;
    collapsible?: boolean;
    side?: 'left' | 'right';
}

export const Panel = ({
    open = true,
    title,
    children,
    onToggle,
    collapsible = true,
    side = 'left',
    className,
    ...props
}: PanelProps) => {
    return (
        <div className={classNames('panel-wrapper', `side-${side}`, className)} {...props}>
            <aside className={classNames('panel', `panel--side-${side}`, !open && collapsible && 'closed')}>
                <div className={classNames('panel-content', !open && collapsible && 'hidden')}>
                    {title && <Heading size="md" weight="bold">{title}</Heading>}
                    {children}
                </div>
            </aside>

            {collapsible && (
                <button
                    type="button"
                    className={classNames('panel-toggle', `side-${side}`)}
                    onClick={onToggle}
                    aria-label={open ? 'Recolher painel' : 'Expandir painel'}
                >
                    <Icon name={side === 'right' ? (open ? 'chevron-right' : 'chevron-left') : (open ? 'chevron-left' : 'chevron-right')} size={20} />
                </button>
            )}
        </div>
    );
};
