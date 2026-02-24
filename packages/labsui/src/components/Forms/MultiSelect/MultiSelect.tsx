import React, { useState, useRef, useEffect } from 'react';
import './MultiSelect.css';
import { Icon } from '../../Typography/Icon/Icon';
import { classNames } from '../../../utils';

export interface MultiSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface MultiSelectProps {
    options: MultiSelectOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    className?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
    options,
    value = [],
    onChange,
    placeholder = 'Selecione...',
    disabled = false,
    error = false,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        if (value.includes(optionValue)) {
            onChange?.(value.filter(v => v !== optionValue));
        } else {
            onChange?.([...value, optionValue]);
        }
    };

    const handleRemove = (e: React.MouseEvent, optionValue: string) => {
        e.stopPropagation();
        onChange?.(value.filter(v => v !== optionValue));
    };

    const selectedOptions = options.filter(opt => value.includes(opt.value));

    return (
        <div
            ref={containerRef}
            className={classNames(
                'labs-multiselect',
                {
                    'labs-multiselect--disabled': disabled,
                    'labs-multiselect--error': error,
                    'labs-multiselect--open': isOpen
                },
                className
            )}
        >
            <div
                className="labs-multiselect__trigger"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                tabIndex={disabled ? -1 : 0}
            >
                <div className="labs-multiselect__values">
                    {selectedOptions.length > 0 ? (
                        selectedOptions.map(opt => (
                            <span key={opt.value} className="labs-multiselect__tag">
                                {opt.label}
                                <span
                                    className="labs-multiselect__tag-remove"
                                    onClick={(e) => handleRemove(e, opt.value)}
                                >
                                    <Icon name="close" size={12} />
                                </span>
                            </span>
                        ))
                    ) : (
                        <span className="labs-multiselect__placeholder">{placeholder}</span>
                    )}
                </div>
                <div className="labs-multiselect__icon">
                    <Icon name="chevron-down" size={16} />
                </div>
            </div>

            {isOpen && (
                <div className="labs-multiselect__dropdown">
                    {options.length === 0 ? (
                        <div className="labs-multiselect__empty">Nenhuma opção disponível</div>
                    ) : (
                        <ul className="labs-multiselect__list">
                            {options.map((opt) => {
                                const isSelected = value.includes(opt.value);
                                return (
                                    <li
                                        key={opt.value}
                                        className={classNames('labs-multiselect__item', {
                                            'labs-multiselect__item--selected': isSelected,
                                            'labs-multiselect__item--disabled': opt.disabled
                                        })}
                                        onClick={() => !opt.disabled && handleSelect(opt.value)}
                                    >
                                        <div className="labs-multiselect__checkbox">
                                            {isSelected && <Icon name="check" size={12} />}
                                        </div>
                                        <span className="labs-multiselect__item-label">{opt.label}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};





