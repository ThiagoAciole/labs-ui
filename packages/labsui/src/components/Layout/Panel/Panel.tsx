import React from 'react';
import './Panel.css';
import { classNames } from '../../../utils/classNames';
import { IconButton } from '../../Forms/IconButton/IconButton';
import { Heading } from '../../Typography/Heading/Heading';

export interface PanelProps {
    children: React.ReactNode;
    opened?: boolean;
    onClose?: () => void;
    side?: 'left' | 'right';
    width?: number | string;
    variant?: 'solid' | 'glass';
    className?: string;
    style?: React.CSSProperties;
}

export const Panel: React.FC<PanelProps> & {
    Header: React.FC<PanelHeaderProps>;
    Content: React.FC<PanelContentProps>;
    Footer: React.FC<PanelFooterProps>;
    Section: React.FC<PanelSectionProps>;
} = ({
    children,
    opened = true,
    onClose,
    side = 'right',
    width = 380,
    variant = 'solid',
    className,
    style,
}) => {
        if (!opened) return null;

        return (
            <aside
                className={classNames(
                    'labs-panel',
                    `labs-panel--${side}`,
                    `labs-panel--${variant}`,
                    className
                )}
                style={{
                    width: typeof width === 'number' ? `${width}px` : width,
                    ...style
                }}
            >
                {onClose && (
                    <div className="labs-panel__close">
                        <IconButton
                            icon="close"
                            appearance="ghost" color="gray"
                            onClick={onClose}
                            aria-label="Close panel"
                            size="md"
                        />
                    </div>
                )}
                {children}
            </aside>
        );
    };

/* --- Header --- */
interface PanelHeaderProps {
    children?: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    className?: string;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({ children, title, icon, className }) => (
    <div className={classNames('labs-panel__header', className)}>
        {icon && <div className="labs-panel__header-icon">{icon}</div>}
        {title && <Heading size="xs" className="labs-panel__header-title">{title}</Heading>}
        {children}
    </div>
);

/* --- Content --- */
interface PanelContentProps {
    children: React.ReactNode;
    className?: string;
}

const PanelContent: React.FC<PanelContentProps> = ({ children, className }) => (
    <div className={classNames('labs-panel__content', className)}>
        {children}
    </div>
);

/* --- Footer --- */
interface PanelFooterProps {
    children: React.ReactNode;
    className?: string;
}

const PanelFooter: React.FC<PanelFooterProps> = ({ children, className }) => (
    <div className={classNames('labs-panel__footer', className)}>
        {children}
    </div>
);

/* --- Section --- */
interface PanelSectionProps {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    className?: string;
}

const PanelSection: React.FC<PanelSectionProps> = ({ children, title, icon, className }) => (
    <div className={classNames('labs-panel__section', className)}>
        {(title || icon) && (
            <div className="labs-panel__section-header">
                {icon && <span className="labs-panel__section-icon">{icon}</span>}
                {title && <span className="labs-panel__section-title">{title}</span>}
            </div>
        )}
        <div className="labs-panel__section-content">
            {children}
        </div>
    </div>
);

Panel.Header = PanelHeader;
Panel.Content = PanelContent;
Panel.Footer = PanelFooter;
Panel.Section = PanelSection;






