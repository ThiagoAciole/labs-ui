import './Slider.css';
import React, { useState } from 'react';
import { classNames } from '../../../utils/classNames';

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
        <div className={classNames('labs-slider-wrapper', className)}>
            {label && <label className="labs-select-label" style={{ marginBottom: '8px', display: 'block' }}>{label}</label>}
            <div className="labs-slider">
                <div className="labs-slider__track">
                    <div className="labs-slider__fill" style={{ width: `${percentage}%` }} />
                </div>
                <div className="labs-slider__thumb" style={{ left: `${percentage}%` }} />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={displayedValue}
                    onChange={handleChange}
                    className="labs-slider__input"
                    {...props}
                />
            </div>
        </div>
    );
};

Slider.displayName = 'Slider';





