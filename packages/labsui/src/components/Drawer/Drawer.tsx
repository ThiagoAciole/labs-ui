import './Drawer.css';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../Icon/Icon';
import { Heading } from '../Heading/Heading';

export type DrawerPlacement = 'left' | 'right';

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    placement?: DrawerPlacement;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    title,
    placement = 'right',
    children,
    footer,
    size
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen && typeof window !== 'undefined') return null;

    return createPortal(
        <>
            <div className="labs-drawer-overlay" onClick={onClose} />
            <div
                className={classNames(
                    'labs-drawer',
                    `labs-drawer--${placement}`,
                    isOpen && 'labs-drawer--open'
                )}
                style={size ? { width: size } : {}}
            >
                <div className="labs-drawer__header">
                    {title ? (
                        <Heading size={5} className="labs-drawer__title">
                            {title}
                        </Heading>
                    ) : <div />}
                    <IconButton
                        variant="ghost"
                        size="sm"
                        icon={<Icon name="close" size={20} />}
                        onClick={onClose}
                        aria-label="Fechar"
                    />
                </div>
                <div className="labs-drawer__body">
                    {children}
                </div>
                {footer && (
                    <div className="labs-drawer__footer">
                        {footer}
                    </div>
                )}
            </div>
        </>,
        document.body
    );
};

Drawer.displayName = 'Drawer';
