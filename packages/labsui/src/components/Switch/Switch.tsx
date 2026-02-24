import './Switch.css';
import React from 'react';
import { classNames, LabelFormater } from '../../utils';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
    labelPosition?: 'left' | 'right';
    size?: SwitchSize;
    hint?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ label, labelPosition = 'right', size = 'md', hint, className, id, ...props }, ref) => {
        const inputId = id ?? (label ? `labs-sw-${LabelFormater(label)}` : undefined);

        return (
            <div className={classNames('labs-switch-root', props.disabled && 'labs-switch-root--disabled', className)}>
                <label className="labs-switch-label" htmlFor={inputId}>
                    {label && labelPosition === 'left' && (
                        <span className="labs-switch-text">{LabelFormater(label)}</span>
                    )}
                    <span className={classNames('labs-switch-control', `labs-switch-control--${size}`)}>
                        <input
                            ref={ref}
                            type="checkbox"
                            role="switch"
                            id={inputId}
                            className="labs-switch-control__input"
                            aria-checked={props.checked}
                            {...props}
                        />
                        <span className="labs-switch-control__track" aria-hidden>
                            <span className="labs-switch-control__thumb" />
                        </span>
                    </span>
                    {label && labelPosition === 'right' && (
                        <span className="labs-switch-text">{LabelFormater(label)}</span>
                    )}
                </label>
                {hint && <span className="labs-switch-hint">{hint}</span>}
            </div>
        );
    }
);

Switch.displayName = 'Switch';
