import './TextArea.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Text } from '../../Typography/Text/Text';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    hint?: string;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
    full?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, error, hint, resize = 'vertical', full = false, className, id, rows = 4, ...props }, ref) => {
        const inputId = id ?? (label ? `labs-textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

        return (
            <div className={classNames('labs-textarea-wrapper', full && 'labs-textarea-wrapper--full', className)}>
                {label && (
                    <Text as="label" htmlFor={inputId} className="labs-textarea-label">{label}</Text>
                )}
                <textarea
                    ref={ref}
                    id={inputId}
                    rows={rows}
                    className={classNames(
                        'labs-textarea',
                        error && 'labs-textarea--error',
                        props.disabled && 'labs-textarea--disabled'
                    )}
                    style={{ resize }}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
                    {...props}
                />
                {error && <Text as="span" id={`${inputId}-error`} color="error" size="sm" className="labs-textarea-message labs-textarea-message--error" role="alert">{error}</Text>}
                {!error && hint && <Text as="span" id={`${inputId}-hint`} color="disabled" size="sm" className="labs-textarea-message">{hint}</Text>}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';





