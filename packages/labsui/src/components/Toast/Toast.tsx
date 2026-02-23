import './Toast.css';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';
import { Icon } from '../Icon/Icon';
import { IconButton } from '../IconButton/IconButton';
import type { IconName } from '../Icon/Icon';

export type ToastVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

export interface ToastData {
    id: string;
    title: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
}

interface ToastContextValue {
    toast: (data: Omit<ToastData, 'id'>) => void;
    dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const VARIANT_ICONS: Record<ToastVariant, IconName> = {
    default: 'info',
    success: 'check',
    warning: 'warning',
    danger: 'close',
    info: 'info',
};

function ToastItem({ toast, onDismiss }: { toast: ToastData; onDismiss: (id: string) => void }) {
    const [exiting, setExiting] = useState(false);

    const handleDismiss = useCallback(() => {
        setExiting(true);
        setTimeout(() => onDismiss(toast.id), 250);
    }, [toast.id, onDismiss]);

    useEffect(() => {
        const duration = toast.duration ?? 4000;
        const timer = setTimeout(handleDismiss, duration);
        return () => clearTimeout(timer);
    }, [handleDismiss, toast.duration]);

    const variant = toast.variant ?? 'default';

    return (
        <div className={classNames('labs-toast', `labs-toast--${variant}`, exiting && 'labs-toast--exiting')}>
            <span className="labs-toast__icon">
                <Icon name={VARIANT_ICONS[variant]} size={18} />
            </span>
            <div className="labs-toast__content">
                <p className="labs-toast__title">{toast.title}</p>
                {toast.description && <p className="labs-toast__description">{toast.description}</p>}
            </div>
            <IconButton
                icon={<Icon name="close" size={14} />}
                aria-label="Dismiss notification"
                variant="ghost"
                size="sm"
                onClick={handleDismiss}
                className="labs-toast__close"
            />
        </div>
    );
}

export interface ToastProviderProps {
    children: React.ReactNode;
    position?: ToastPosition;
    maxToasts?: number;
}

export function ToastProvider({ children, position = 'top-right', maxToasts = 5 }: ToastProviderProps) {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const toast = useCallback((data: Omit<ToastData, 'id'>) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        setToasts((prev) => [...prev.slice(-(maxToasts - 1)), { ...data, id }]);
    }, [maxToasts]);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toast, dismiss }}>
            {children}
            {createPortal(
                <div className={classNames('labs-toast-container', `labs-toast-container--${position}`)}>
                    {toasts.map((t) => (
                        <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
}

export function useToast(): ToastContextValue {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
    return ctx;
}
