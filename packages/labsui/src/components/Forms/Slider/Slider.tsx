import './Slider.css';
import React, { useState } from 'react';
import { classNames } from '../../../utils/classNames';
import { Text } from '../../Typography/Text/Text';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
}

export const Slider: React.FC<SliderProps> = ({
    value,
    defaultValue,
    onChange,
    min = 0,
    max = 100,
    label,
    className,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(Number(value || defaultValue || 0));

    const displayedValue = value !== undefined ? Number(value) : internalValue;
    const percentage = ((displayedValue - Number(min)) / (Number(max) - Number(min))) * 100;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = Number(e.target.value);
        if (value === undefined) setInternalValue(newVal);
        if (onChange) onChange(e);
    };

    return (
        <div className={classNames('slider-wrapper', className)}>
            {label && <Text as="label" className="select-label" style={{ marginBottom: '8px', display: 'block' }}>{label}</Text>}
            <div className="slider">
                <div className="slider__track">
                    <div className="slider__fill" style={{ width: `${percentage}%` }} />
                </div>
                <div className="slider__thumb" style={{ left: `${percentage}%` }} />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={displayedValue}
                    onChange={handleChange}
                    className="slider__input"
                    {...props}
                />
            </div>
        </div>
    );
};

Slider.displayName = 'Slider';





