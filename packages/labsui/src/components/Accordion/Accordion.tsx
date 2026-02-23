import React, { useState } from 'react';
import './Accordion.css';
import { Icon } from '../Icon/Icon';
import { classNames } from '../../utils/classNames';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    id?: string;
    className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    isOpen = false,
    onToggle,
    id,
    className
}) => {
    return (
        <div className={classNames('labs-accordion-item', { 'labs-accordion-item--open': isOpen }, className)}>
            <button
                className="labs-accordion-item__trigger"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${id}`}
                id={`accordion-trigger-${id}`}
            >
                <span className="labs-accordion-item__title">{title}</span>
                <span className="labs-accordion-item__icon">
                    <Icon name="chevron-down" size={16} />
                </span>
            </button>
            <div
                className="labs-accordion-item__content-wrapper"
                id={`accordion-content-${id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${id}`}
                hidden={!isOpen}
            >
                <div className="labs-accordion-item__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    children: React.ReactNode;
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    className?: string;
    style?: React.CSSProperties;
}

export const Accordion: React.FC<AccordionProps> & { Item: typeof AccordionItem } = ({
    children,
    type = 'single',
    defaultValue,
    className,
    style
}) => {
    const [openItems, setOpenItems] = useState<string[]>(
        Array.isArray(defaultValue) ? defaultValue : (defaultValue ? [defaultValue] : [])
    );

    const handleToggle = (id: string) => {
        if (type === 'single') {
            setOpenItems(openItems.includes(id) ? [] : [id]);
        } else {
            setOpenItems(openItems.includes(id)
                ? openItems.filter(item => item !== id)
                : [...openItems, id]
            );
        }
    };

    return (
        <div className={classNames('labs-accordion', className)} style={style}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement<AccordionItemProps>(child)) {
                    const id = child.props.id || `accordion-item-${index}`;
                    return React.cloneElement(child, {
                        isOpen: openItems.includes(id),
                        onToggle: () => handleToggle(id),
                        id
                    });
                }
                return child;
            })}
        </div>
    );
};

Accordion.Item = AccordionItem;
