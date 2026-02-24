import './Select.css';
import React, { useState, useRef, useEffect } from 'react';
import { classNames, LabelFormater } from '../../../utils';
import { Icon } from '../../Typography/Icon/Icon';

export interface SelectOption {
    value: string;
    label: React.ReactNode;
    searchValue?: string;
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
    full?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
    ({ options, value, defaultValue, onChange, label, error, hint, size = 'md', placeholder = 'Selecione...', full = false, disabled = false, className, id, ...props }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
        const [searchTerm, setSearchTerm] = useState('');
        const containerRef = useRef<HTMLDivElement>(null);
        const searchInputRef = useRef<HTMLInputElement>(null);

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

        useEffect(() => {
            if (isOpen && props.searchable && searchInputRef.current) {
                searchInputRef.current.focus();
            }
            if (!isOpen) {
                setSearchTerm('');
            }
        }, [isOpen, props.searchable]);

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

        const filteredOptions = options.filter(opt => {
            if (!props.searchable || !searchTerm) return true;
            const textToSearch = opt.searchValue || (typeof opt.label === 'string' ? opt.label : String(opt.value));
            return textToSearch.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return (
            <div
                ref={containerRef}
                className={classNames('labs-select-wrapper', full && 'labs-select-wrapper--full', className)}
            >
                {label && (
                    <label id={`${inputId}-label`} className="labs-select-label" onClick={() => !disabled && setIsOpen(true)}>
                        {LabelFormater(label)}
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
                        {props.searchable && (
                            <div className="labs-select-menu__search">
                                <Icon name="search" size={14} className="labs-select-menu__search-icon" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    className="labs-select-menu__search-input"
                                    placeholder={props.searchPlaceholder || 'Pesquisar...'}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                    onKeyDown={(e) => {
                                        if (e.key === ' ') e.stopPropagation();
                                    }}
                                />
                            </div>
                        )}
                        <ul className="labs-select-menu__list" role="listbox">
                            {filteredOptions.length > 0 ? filteredOptions.map((opt) => (
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
                            )) : (
                                <li className="labs-select-menu__empty">Nenhum resultado encontrado</li>
                            )}
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





