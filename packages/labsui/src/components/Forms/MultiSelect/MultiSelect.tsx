import React, { useState, useRef, useEffect } from 'react';
import './MultiSelect.css';
import { Icon } from '../../Typography/Icon/Icon';
import { classNames } from '../../../utils';
import { DropdownContainer } from '../../Layout/DropdownContainer';
import { Tag } from '../../DataDisplay/Tag/Tag';
import { Checkbox } from '../Checkbox/Checkbox';

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

    const handleRemove = (optionValue: string) => {
        onChange?.(value.filter(v => v !== optionValue));
    };

    const selectedOptions = options.filter(opt => value.includes(opt.value));

    return (
        <div
            ref={containerRef}
            className={classNames(
                'labs-select-wrapper',
                'labs-multiselect',
                isOpen && 'labs-multiselect--open',
                error && 'labs-multiselect--error',
                disabled && 'labs-multiselect--disabled',
                className
            )}
        >
            <div
                className={classNames(
                    'labs-input-field',
                    'labs-input-field--clickable',
                    'labs-input-field--md',
                    isOpen && 'labs-input-field--active',
                    error && 'labs-input-field--error',
                    disabled && 'labs-input-field--disabled'
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                tabIndex={disabled ? -1 : 0}
            >
                <div className="labs-input-field__input" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="labs-multiselect__values">
                        {selectedOptions.length > 0 ? (
                            selectedOptions.map(opt => (
                                <span key={opt.value} onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
                                    <Tag
                                        size="sm"
                                        color="primary"
                                        className="labs-multiselect__tag"
                                        closable
                                        onRemove={() => handleRemove(opt.value)}
                                    >
                                        {opt.label}
                                    </Tag>
                                </span>
                            ))
                        ) : (
                            <span className="labs-multiselect__placeholder">{placeholder}</span>
                        )}
                    </div>
                </div>
                <div className="labs-input-field__adornment labs-input-field__adornment--suffix">
                    <Icon name="chevron-down" size={16} className="labs-multiselect__icon" />
                </div>
            </div>

            <DropdownContainer isOpen={isOpen}>
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
                                    <Checkbox
                                        checked={isSelected}
                                        disabled={opt.disabled}
                                        label={opt.label}
                                        onChange={() => undefined}
                                        className="labs-multiselect__item-checkbox"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                )}
            </DropdownContainer>
        </div>
    );
};





