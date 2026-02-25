import React, { useState } from 'react';
import './Accordion.css';
import { Icon } from '../../Typography/Icon/Icon';
import { classNames } from '../../../utils/classNames';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    id?: string;
    className?: string;
}

interface AccordionProps {
    children: React.ReactNode;
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    className?: string;
    style?: React.CSSProperties;
}

type AccordionComponent = React.FC<AccordionProps> & { Item: typeof AccordionItem };

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useAccordionState(type: 'single' | 'multiple', defaultValue?: string | string[]) {
    const initialOpen = Array.isArray(defaultValue)
        ? defaultValue
        : defaultValue ? [defaultValue] : [];

    const [openItems, setOpenItems] = useState<string[]>(initialOpen);

    const toggle = (id: string) => {
        setOpenItems(prev => {
            const isOpen = prev.includes(id);
            if (type === 'single') return isOpen ? [] : [id];
            return isOpen ? prev.filter(i => i !== id) : [...prev, id];
        });
    };

    return { openItems, toggle };
}

// ─── AccordionItem ─────────────────────────────────────────────────────────────

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    isOpen = false,
    onToggle,
    id,
    className,
}) => (
    <div className={classNames('accordion-item', { 'accordion-item--open': isOpen }, className)}>
        <button
            className="accordion-item__trigger"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${id}`}
            id={`accordion-trigger-${id}`}
        >
            <span className="accordion-item__title">{title}</span>
            <Icon
                name="chevron-down"
                size={16}
                style={{ transition: 'transform 0.3s cubic-bezier(0.87, 0, 0.13, 1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
        </button>

        <div
            className="accordion-item__content"
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-trigger-${id}`}
            hidden={!isOpen}
        >
            {children}
        </div>
    </div>
);

// ─── Accordion ─────────────────────────────────────────────────────────────────

export const Accordion: AccordionComponent = ({
    children,
    type = 'single',
    defaultValue,
    className,
    style,
}) => {
    const { openItems, toggle } = useAccordionState(type, defaultValue);

    return (
        <div className={classNames('accordion', className)} style={style}>
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement<AccordionItemProps>(child)) return child;

                const id = child.props.id ?? `accordion-item-${index}`;
                return React.cloneElement(child, {
                    id,
                    isOpen: openItems.includes(id),
                    onToggle: () => toggle(id),
                });
            })}
        </div>
    );
};

Accordion.Item = AccordionItem;