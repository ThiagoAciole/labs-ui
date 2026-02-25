import './Switch.css';
import React from 'react';
import { classNames, LabelFormater } from '../../../utils';
import { Text } from '../../Typography/Text/Text';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
    labelPosition?: 'left' | 'right';
    size?: SwitchSize;
    supportText?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ label, labelPosition = 'right', size = 'md', supportText, className, id, ...props }, ref) => {
        const inputId = id ?? (label ? `sw-${LabelFormater(label)}` : undefined);

        return (
            <div className={classNames('switch-root', props.disabled && 'switch-root--disabled', className)}>
                <label className="switch-label" htmlFor={inputId}>
                    {label && labelPosition === 'left' && (
                        <Text as="span" className="switch-text">{LabelFormater(label)}</Text>
                    )}
                    <span className={classNames('switch-control', `switch-control--${size}`)}>
                        <input
                            ref={ref}
                            type="checkbox"
                            role="switch"
                            id={inputId}
                            className="switch-control__input"
                            aria-checked={props.checked}
                            {...props}
                        />
                        <span className="switch-control__track" aria-hidden>
                            <span className="switch-control__thumb" />
                        </span>
                    </span>
                    {label && labelPosition === 'right' && (
                        <Text as="span" className="switch-text">{LabelFormater(label)}</Text>
                    )}
                </label>
                {supportText && <Text as="span" color="disabled" size="sm" className="switch-supportText">{supportText}</Text>}
            </div>
        );
    }
);

Switch.displayName = 'Switch';





