import './DropdownMenu.css';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../../utils/classNames';

export interface DropdownMenuItem {
    label?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    danger?: boolean;
    separator?: boolean;
}

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface DropdownMenuProps {
    trigger: React.ReactElement;
    items: DropdownMenuItem[];
    placement?: DropdownPlacement;
    className?: string;
}

export function DropdownMenu({ trigger, items, placement = 'bottom-start', className }: DropdownMenuProps) {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        const OFFSET = 4;
        let top = rect.bottom + window.scrollY + OFFSET;
        let left = rect.left + window.scrollX;
        if (placement.endsWith('end')) left = rect.right + window.scrollX;
        if (placement.startsWith('top')) top = rect.top + window.scrollY - OFFSET;
        setPos({ top, left });
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        if (!open) return;
        const onClickOutside = (e: MouseEvent) => {
            if (!menuRef.current?.contains(e.target as Node) && !triggerRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('mousedown', onClickOutside);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onClickOutside);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    const triggerEl = React.cloneElement(trigger, {
        ref: triggerRef,
        onClick: handleOpen,
        'aria-haspopup': 'menu',
        'aria-expanded': open,
    });

    return (
        <>
            {triggerEl}
            {open && createPortal(
                <div
                    ref={menuRef}
                    role="menu"
                    className={classNames('labs-dropdown', className)}
                    style={{
                        top: pos.top,
                        left: placement.endsWith('end') ? 'auto' : pos.left,
                        right: placement.endsWith('end') ? `calc(100vw - ${pos.left}px)` : 'auto',
                    }}
                >
                    {items.map((item, i) =>
                        item.separator ? (
                            <div key={i} className="labs-dropdown-separator" role="separator" />
                        ) : (
                            <button
                                key={i}
                                type="button"
                                role="menuitem"
                                disabled={item.disabled}
                                className={classNames('labs-dropdown-item', item.danger && 'labs-dropdown-item--danger')}
                                onClick={() => { item.onClick?.(); setOpen(false); }}
                            >
                                {item.icon && <span className="labs-dropdown-item__icon">{item.icon}</span>}
                                <span className="labs-dropdown-item__label">{item.label}</span>
                            </button>
                        )
                    )}
                </div>,
                document.body
            )}
        </>
    );
}





