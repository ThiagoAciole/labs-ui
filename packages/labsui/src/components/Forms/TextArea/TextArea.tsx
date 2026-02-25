import './TextArea.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Text } from '../../Typography/Text/Text';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    supportText?: string;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    full?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, error, supportText, resize = 'vertical', full = false, className, id, rows = 4, ...props }, ref) => {
        const inputId = id ?? (label ? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

        return (
            <div className={classNames('textarea-wrapper', full && 'textarea-wrapper--full', className)}>
                {label && (
                    <Text as="label" htmlFor={inputId} className="textarea-label">{label}</Text>
                )}
                <textarea
                    ref={ref}
                    id={inputId}
                    rows={rows}
                    className={classNames(
                        'textarea',
                        error && 'textarea--error',
                        props.disabled && 'textarea--disabled'
                    )}
                    style={{ resize }}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : supportText ? `${inputId}-supportText` : undefined}
                    {...props}
                />
                {error && <Text as="span" id={`${inputId}-error`} color="error" size="sm" className="textarea-message textarea-message--error" role="alert">{error}</Text>}
                {!error && supportText && <Text as="span" id={`${inputId}-supportText`} color="disabled" size="sm" className="textarea-message">{supportText}</Text>}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';





