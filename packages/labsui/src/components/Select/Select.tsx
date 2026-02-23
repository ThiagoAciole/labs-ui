import './Select.css';
import React, { useState, useRef, useEffect } from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../Icon/Icon';

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: string;
    error?: string;
    hint?: string;
    size?: SelectSize;
    placeholder?: string;
    fullWidth?: boolean;
    disabled?: boolean;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
    ({ options, value, defaultValue, onChange, label, error, hint, size = 'md', placeholder = 'Selecione...', fullWidth = false, disabled = false, className, id, ...props }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
        const containerRef = useRef<HTMLDivElement>(null);

        // Atualiza estado interno se o value prop mudar
        useEffect(() => {
            if (value !== undefined) setSelectedValue(value);
        }, [value]);

        // Fecha ao clicar fora
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        const selectedOption = options.find(opt => opt.value === selectedValue);
        const inputId = id ?? (label ? `labs-select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

        const handleToggle = () => {
            if (!disabled) setIsOpen(!isOpen);
        };

        const handleOptionClick = (val: string, optDisabled?: boolean) => {
            if (optDisabled) return;

            setSelectedValue(val);
            setIsOpen(false);
            if (onChange) onChange(val);
        };

        return (
            <div
                ref={containerRef}
                className={classNames('labs-select-wrapper', fullWidth && 'labs-select-wrapper--full', className)}
            >
                {label && (
                    <label id={`${inputId}-label`} className="labs-select-label" onClick={() => !disabled && setIsOpen(true)}>
                        {label}
                    </label>
                )}

                <div
                    ref={ref}
                    id={inputId}
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-labelledby={`${inputId}-label`}
                    className={classNames(
                        'labs-select-field',
                        `labs-select-field--${size}`,
                        isOpen && 'labs-select-field--active',
                        error && 'labs-select-field--error',
                        disabled && 'labs-select-field--disabled'
                    )}
                    onClick={handleToggle}
                    tabIndex={disabled ? -1 : 0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleToggle();
                        } else if (e.key === 'Escape') {
                            setIsOpen(false);
                        }
                    }}
                    {...props}
                >
                    <span className={classNames('labs-select-field__value', !selectedOption && 'labs-select-field__value--placeholder')}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <span className="labs-select-field__icon">
                        <Icon name="chevron-down" size={16} />
                    </span>
                </div>

                {isOpen && (
                    <div className="labs-select-menu">
                        <ul className="labs-select-menu__list" role="listbox">
                            {options.map((opt) => (
                                <li
                                    key={opt.value}
                                    role="option"
                                    aria-selected={opt.value === selectedValue}
                                    className={classNames(
                                        'labs-select-menu__option',
                                        opt.value === selectedValue && 'labs-select-menu__option--selected',
                                        opt.disabled && 'labs-select-menu__option--disabled'
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOptionClick(opt.value, opt.disabled);
                                    }}
                                >
                                    {opt.label}
                                    {opt.value === selectedValue && (
                                        <Icon name="check" size={14} />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {error && <span className="labs-select-message labs-select-message--error" role="alert">{error}</span>}
                {!error && hint && <span className="labs-select-message">{hint}</span>}
            </div>
        );
    }
);

Select.displayName = 'Select';
