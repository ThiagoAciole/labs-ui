import React, { forwardRef } from 'react';
import './Radio.css';
import { classNames } from '../../../utils/classNames';
import { Text } from '../../Typography/Text/Text';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    description?: string;
    error?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
    label,
    description,
    className,
    disabled,
    error,
    style,
    ...props
}, ref) => {
    return (
        <label
            className={classNames(
                'labs-radio__wrapper',
                {
                    'labs-radio--disabled': disabled,
                    'labs-radio--error': error
                },
                className
            )}
            style={style}
        >
            <div className="labs-radio__input-container">
                <input
                    type="radio"
                    className="labs-radio__input"
                    disabled={disabled}
                    ref={ref}
                    {...props}
                />
                <div className="labs-radio__control">
                    <div className="labs-radio__dot" />
                </div>
            </div>

            {(label || description) && (
                <div className="labs-radio__content">
                    {label && <Text as="span" className="labs-radio__label">{label}</Text>}
                    {description && <Text as="span" color="disabled" size="sm" className="labs-radio__description">{description}</Text>}
                </div>
            )}
        </label>
    );
});

Radio.displayName = 'Radio';





