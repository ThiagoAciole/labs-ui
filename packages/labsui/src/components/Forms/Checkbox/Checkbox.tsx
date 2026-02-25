import './Checkbox.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { Icon } from '../../Typography/Icon/Icon';
import { Text } from '../../Typography/Text/Text';
import { colorVar, type TokenColor } from '../../../utils/styleTokens';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    indeterminate?: boolean;
    supportText?: string;
    color?: TokenColor;
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
    ({ label, indeterminate = false, supportText, className, id, disabled, color = 'primary', ...props }, ref) => {
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
                style={{ ['--labs-checkbox-color' as string]: colorVar(color), ...(props.style ?? {}) }}
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
                {supportText && <Text as="span" color="disabled" size="sm" className="labs-checkbox-supportText">{supportText}</Text>}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';






