import React, { forwardRef } from 'react';
import './Radio.css';
import { classNames } from '../../../utils/classNames';
import { Text } from '../../Typography/Text/Text';
import { colorVar, type TokenColor } from '../../../utils/styleTokens';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    description?: string;
    error?: boolean;
    color?: TokenColor;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
    label,
    description,
    className,
    disabled,
    error,
    style,
    color = 'primary',
    ...props
}, ref) => {
    return (
        <label
            className={classNames(
                'radio__wrapper',
                {
                    'radio--disabled': disabled,
                    'radio--error': error
                },
                className
            )}
            style={{ ['--radio-color' as string]: colorVar(color), ...(style ?? {}) }}
        >
            <div className="radio__input-container">
                <input
                    type="radio"
                    className="radio__input"
                    disabled={disabled}
                    ref={ref}
                    {...props}
                />
                <div className="radio__control">
                    <div className="radio__dot" />
                </div>
            </div>

            {(label || description) && (
                <div className="radio__content">
                    {label && <Text as="span" className="radio__label">{label}</Text>}
                    {description && <Text as="span" color="disabled" size="sm" className="radio__description">{description}</Text>}
                </div>
            )}
        </label>
    );
});

Radio.displayName = 'Radio';





