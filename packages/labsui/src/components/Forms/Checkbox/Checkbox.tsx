import './Checkbox.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';
import { Text } from '../../Typography/Text/Text';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    indeterminate?: boolean;
    hint?: string;
}

function setForwardedRef<T>(ref: React.ForwardedRef<T>, value: T | null) {
    if (typeof ref === 'function') {
        ref(value);
        return;
    }
    if (ref) {
        ref.current = value;
    }
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, indeterminate = false, hint, className, id, disabled, ...props }, ref) => {
        const generatedId = React.useId();
        const inputId = id ?? `labs-cb-${generatedId}`;
        const inputRef = React.useRef<HTMLInputElement | null>(null);

        React.useEffect(() => {
            if (inputRef.current) {
                inputRef.current.indeterminate = indeterminate;
            }
        }, [indeterminate]);

        const handleRef = (node: HTMLInputElement | null) => {
            inputRef.current = node;
            setForwardedRef(ref, node);
        };

        return (
            <div
                className={classNames(
                    'labs-checkbox-root',
                    disabled && 'labs-checkbox-root--disabled',
                    indeterminate && 'labs-checkbox-root--indeterminate',
                    className
                )}
            >
                <label className="labs-checkbox-label" htmlFor={inputId}>
                    <span className="labs-checkbox-control">
                        <input
                            ref={handleRef}
                            type="checkbox"
                            id={inputId}
                            className="labs-checkbox-control__input"
                            aria-checked={indeterminate ? 'mixed' : undefined}
                            disabled={disabled}
                            {...props}
                        />
                        <span className="labs-checkbox-control__box" aria-hidden>
                            <Icon name="check" size={12} color="inherit" className="labs-checkbox-control__icon" />
                            <span className="labs-checkbox-control__dash" />
                        </span>
                    </span>
                    {label && <Text as="span" className="labs-checkbox-text">{label}</Text>}
                </label>
                {hint && <Text as="span" color="disabled" size="sm" className="labs-checkbox-hint">{hint}</Text>}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';






