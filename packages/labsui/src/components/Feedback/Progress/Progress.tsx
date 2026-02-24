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
        <div className={classNames('labs-progress-wrapper', className)}>
            {label && <div className="labs-progress-label">{label}</div>}
            <div className={classNames('labs-progress', `labs-progress--${size}`, animated && 'labs-progress--animated')} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} style={{ ['--labs-progress-color' as string]: `var(--color--${color})`, ...(style ?? {}) }} {...props}>
                <div className="labs-progress__bar" style={{ width: `${percentage}%` }} />
            </div>
            {showValue && <div className="labs-progress-value">{Math.round(percentage)}%</div>}
        </div>
    );
};

Progress.displayName = 'Progress';

