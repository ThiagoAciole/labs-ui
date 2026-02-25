import './Select.css';
import React, { useState, useRef, useEffect } from 'react';
import { classNames, LabelFormater } from '../../../utils';
import { Icon } from '../../Typography/Icon/Icon';
import { Text } from '../../Typography/Text/Text';
import { DropdownContainer } from '../../Layout/DropdownContainer';

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
    supportText?: string;
    size?: SelectSize;
    placeholder?: string;
    full?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
    ({ options, value, defaultValue, onChange, label, error, supportText, size = 'md', placeholder = 'Selecione...', full = false, disabled = false, className, id, ...props }, ref) => {
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
        const inputId = id ?? (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

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
                className={classNames('select-wrapper', full && 'select-wrapper--full', className)}
            >
                {label && (
                    <Text size="xs" weight="medium" color='neutral' as="label" id={`${inputId}-label`} className="select-label" onClick={() => !disabled && setIsOpen(true)}>
                        {LabelFormater(label)}
                    </Text>
                )}

                <div
                    ref={ref}
                    id={inputId}
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-labelledby={`${inputId}-label`}
                    className={classNames(
                        'input-field',
                        'input-field--clickable',
                        `input-field--${size}`,
                        isOpen && 'input-field--active',
                        error && 'input-field--error',
                        disabled && 'input-field--disabled'
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
                    <div className="input-field__input" style={{ display: 'flex', alignItems: 'center' }}>
                        <Text as="span" color={!selectedOption ? "disabled" : "default"} className={classNames('select-field__value', !selectedOption && 'select-field__value--placeholder')}>
                            {selectedOption ? selectedOption.label : placeholder}
                        </Text>
                    </div>
                    <span className="input-field__adornment input-field__adornment--suffix">
                        <Icon name="chevron-down" size={16} />
                    </span>
                </div>

                <DropdownContainer isOpen={isOpen}>
                    {props.searchable && (
                        <div className="select-menu__search">
                            <Icon name="search" size={14} className="select-menu__search-icon" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                className="select-menu__search-input"
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
                    <ul className="select-menu__list" role="listbox">
                        {filteredOptions.length > 0 ? filteredOptions.map((opt) => (
                            <li
                                key={opt.value}
                                role="option"
                                aria-selected={opt.value === selectedValue}
                                className={classNames(
                                    'select-menu__option',
                                    opt.value === selectedValue && 'select-menu__option--selected',
                                    opt.disabled && 'select-menu__option--disabled'
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleOptionClick(opt.value, opt.disabled);
                                }}
                            >
                                {opt.label}
                                {opt.value === selectedValue && (
                                    <div className='checked-icon'>
                                        <Icon name="check" size={14} color='disabled' />
                                    </div>
                                )}
                            </li>
                        )) : (
                            <li className="select-menu__empty">Nenhum resultado encontrado</li>
                        )}
                    </ul>
                </DropdownContainer>

                {error && <Text as="span" color="error" size="sm" className="select-message select-message--error" role="alert">{error}</Text>}
                {!error && supportText && <Text as="span" color="disabled" size="sm" className="select-message">{supportText}</Text>}
            </div>
        );
    }
);

Select.displayName = 'Select';





