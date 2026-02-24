import './Switch.css';
import React from 'react';
import { classNames, LabelFormater } from '../../../utils';
import { Text } from '../../Typography/Text/Text';

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
                        <Text as="span" className="labs-switch-text">{LabelFormater(label)}</Text>
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
                        <Text as="span" className="labs-switch-text">{LabelFormater(label)}</Text>
                    )}
                </label>
                {hint && <Text as="span" color="disabled" size="sm" className="labs-switch-hint">{hint}</Text>}
            </div>
        );
    }
);

Switch.displayName = 'Switch';





