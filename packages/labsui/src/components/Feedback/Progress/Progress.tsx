import './Progress.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';
import { type TokenColor } from '../../../utils/styleTokens';

export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    size?: ProgressSize;
    color?: TokenColor;
    animated?: boolean;
    showValue?: boolean;
    label?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100, size = 'md', color = 'primary', animated = false, showValue = false, label, className, style, ...props }) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    return (
        <div className={classNames('progress-wrapper', className)}>
            {label && <div className="progress-label">{label}</div>}
            <div className={classNames('progress', `progress--${size}`, animated && 'progress--animated')} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} style={{ ['--progress-color' as string]: `var(--bg-${color === 'neutral' ? 'neutral' : color})`, ...(style ?? {}) }} {...props}>
                <div className="progress__bar" style={{ width: `${percentage}%` }} />
            </div>
            {showValue && <div className="progress-value">{Math.round(percentage)}%</div>}
        </div>
    );
};

Progress.displayName = 'Progress';

