import './Input.css';
import { classNames, LabelFormater } from '../../../utils';
import { Text } from '../../Typography/Text/Text';
import React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'prefix' | 'suffix'> {
    label?: string;
    error?: string;
    supportText?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    size?: InputSize;
    full?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, supportText, prefix, suffix, size = 'md', full = false, className, id, ...props }, ref) => {
        const inputId = id ?? (label ? `input-${LabelFormater(label)}` : undefined);

        return (
            <div className={classNames('input-wrapper', full && 'input-wrapper--full', className)}>
                {label && (
                    <Text size="xs" weight="medium" color='neutral' as="label" htmlFor={inputId} className="input-label">
                        {LabelFormater(label)}
                    </Text>
                )}
                <div className={classNames('input-field', `input-field--${size}`, error && 'input-field--error', props.disabled && 'input-field--disabled')}>
                    {prefix && <span className="input-field__adornment input-field__adornment--prefix">{prefix}</span>}
                    <input
                        ref={ref}
                        id={inputId}
                        className="input-field__input"
                        aria-invalid={!!error}
                        aria-describedby={error ? `${inputId}-error` : supportText ? `${inputId}-supportText` : undefined}
                        {...props}
                    />
                    {suffix && <span className="input-field__adornment input-field__adornment--suffix">{suffix}</span>}
                </div>
                {error && <Text as="span" id={`${inputId}-error`} color="error" size="sm" className="input-message input-message--error" role="alert">{error}</Text>}
                {!error && supportText && <Text as="span" id={`${inputId}-supportText`} color="disabled" size="sm" className="input-message">{supportText}</Text>}
            </div>
        );
    }
);

Input.displayName = 'Input';
