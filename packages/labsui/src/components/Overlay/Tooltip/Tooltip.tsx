import './Tooltip.css';
import React, { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../../utils/classNames';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    content: React.ReactNode;
    placement?: TooltipPlacement;
    children: React.ReactElement;
    delay?: number;
}

export function Tooltip({ content, placement = 'top', children, delay = 300 }: TooltipProps) {
    const [visible, setVisible] = useState(false);
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLElement>(null);
    const timerRef = useRef<number>(0);

    const show = useCallback(() => {
        timerRef.current = window.setTimeout(() => {
            if (!triggerRef.current) return;
            const rect = triggerRef.current.getBoundingClientRect();
            const OFFSET = 8;
            let top = 0;
            let left = 0;

            if (placement === 'top') { top = rect.top - OFFSET; left = rect.left + rect.width / 2; }
            else if (placement === 'bottom') { top = rect.bottom + OFFSET; left = rect.left + rect.width / 2; }
            else if (placement === 'left') { top = rect.top + rect.height / 2; left = rect.left - OFFSET; }
            else { top = rect.top + rect.height / 2; left = rect.right + OFFSET; }

            setPos({ top: top + window.scrollY, left: left + window.scrollX });
            setVisible(true);
        }, delay);
    }, [placement, delay]);

    const hide = useCallback(() => {
        clearTimeout(timerRef.current);
        setVisible(false);
    }, []);

    const child = React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: show,
        onMouseLeave: hide,
        onFocus: show,
        onBlur: hide,
    });

    return (
        <>
            {child}
            {visible && createPortal(
                <div
                    className={classNames('tooltip', `tooltip--${placement}`)}
                    style={{ top: pos.top, left: pos.left }}
                    role="tooltip"
                >
                    {content}
                </div>,
                document.body
            )}
        </>
    );
}





