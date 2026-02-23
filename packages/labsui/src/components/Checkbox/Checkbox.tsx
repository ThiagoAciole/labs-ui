import './Checkbox.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../Icon/Icon';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    indeterminate?: boolean;
    hint?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, indeterminate = false, hint, className, id, ...props }, ref) => {
        const inputId = id ?? (label ? `labs-cb-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

        const handleRef = (el: HTMLInputElement | null) => {
            if (el) {
                el.indeterminate = indeterminate;
            }
            if (typeof ref === 'function') ref(el);
            else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
        };

        return (
            <div className={classNames('labs-checkbox-root', props.disabled && 'labs-checkbox-root--disabled', className)}>
                <label className="labs-checkbox-label" htmlFor={inputId}>
                    <span className="labs-checkbox-control">
                        <input
                            ref={handleRef}
                            type="checkbox"
                            id={inputId}
                            className="labs-checkbox-control__input"
                            aria-checked={indeterminate ? 'mixed' : props.checked}
                            {...props}
                        />
                        <span className="labs-checkbox-control__box" aria-hidden>
                            {props.checked && !indeterminate && <Icon name="check" size={12} />}
                            {indeterminate && <span className="labs-checkbox-control__dash" />}
                        </span>
                    </span>
                    {label && <span className="labs-checkbox-text">{label}</span>}
                </label>
                {hint && <span className="labs-checkbox-hint">{hint}</span>}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
