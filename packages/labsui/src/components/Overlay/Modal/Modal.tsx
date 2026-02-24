import './Modal.css';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../../utils/classNames';
import { IconButton } from '../../Forms/IconButton/IconButton';
import { Heading } from '../../Typography/Heading/Heading';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    size?: ModalSize;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    closeOnOverlayClick?: boolean;
}

export function Modal({
    open,
    onClose,
    title,
    description,
    size = 'md',
    children,
    footer,
    className,
    closeOnOverlayClick = true,
}: ModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        // Focus trap – focus dialog on open
        dialogRef.current?.focus();

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div className="labs-modal-overlay" onClick={closeOnOverlayClick ? onClose : undefined}>
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'labs-modal-title' : undefined}
                aria-describedby={description ? 'labs-modal-description' : undefined}
                tabIndex={-1}
                className={classNames('labs-modal', `labs-modal--${size}`, className)}
                onClick={(e) => e.stopPropagation()}
            >
                {(title || description) && (
                    <div className="labs-modal-header">
                        <div>
                            {title && (
                                <Heading id="labs-modal-title" size="sm" className="labs-modal-title">
                                    {title}
                                </Heading>
                            )}
                            {description && <p id="labs-modal-description" className="labs-modal-description">{description}</p>}
                        </div>
                        <IconButton
                            icon="close"
                            aria-label="Close modal"
                            appearance="ghost" color="gray"
                            size="sm"
                            onClick={onClose}
                        />
                    </div>
                )}
                {children && <div className="labs-modal-body">{children}</div>}
                {footer && <div className="labs-modal-footer">{footer}</div>}
            </div>
        </div>,
        document.body
    );
}






