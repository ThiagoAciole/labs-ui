import './TextArea.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

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
                    <label htmlFor={inputId} className="labs-textarea-label">{label}</label>
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
                {error && <span id={`${inputId}-error`} className="labs-textarea-message labs-textarea-message--error" role="alert">{error}</span>}
                {!error && hint && <span id={`${inputId}-hint`} className="labs-textarea-message">{hint}</span>}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';
