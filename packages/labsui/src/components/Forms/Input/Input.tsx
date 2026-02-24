import './Input.css';
import { classNames, LabelFormater } from '../../../utils';
import { Text } from '../../Typography/Text/Text';
import React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'prefix' | 'suffix'> {
    label?: string;
    error?: string;
    hint?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    size?: InputSize;
    full?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, hint, prefix, suffix, size = 'md', full = false, className, id, ...props }, ref) => {
        const inputId = id ?? (label ? `labs-input-${LabelFormater(label)}` : undefined);

        return (
            <div className={classNames('labs-input-wrapper', full && 'labs-input-wrapper--full', className)}>
                {label && (
                    <Text as="label" htmlFor={inputId} className="labs-input-label">
                        {label}
                    </Text>
                )}
                <div className={classNames('labs-input-field', `labs-input-field--${size}`, error && 'labs-input-field--error', props.disabled && 'labs-input-field--disabled')}>
                    {prefix && <span className="labs-input-field__adornment labs-input-field__adornment--prefix">{prefix}</span>}
                    <input
                        ref={ref}
                        id={inputId}
                        className="labs-input-field__input"
                        aria-invalid={!!error}
                        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
                        {...props}
                    />
                    {suffix && <span className="labs-input-field__adornment labs-input-field__adornment--suffix">{suffix}</span>}
                </div>
                {error && <Text as="span" id={`${inputId}-error`} color="error" size="sm" className="labs-input-message labs-input-message--error" role="alert">{error}</Text>}
                {!error && hint && <Text as="span" id={`${inputId}-hint`} color="disabled" size="sm" className="labs-input-message">{hint}</Text>}
            </div>
        );
    }
);

Input.displayName = 'Input';
