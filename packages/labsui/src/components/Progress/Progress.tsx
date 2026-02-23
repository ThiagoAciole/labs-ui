import './Progress.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export type ProgressVariant = 'default' | 'success' | 'warning' | 'danger';
export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    size?: ProgressSize;
    variant?: ProgressVariant;
    animated?: boolean;
    showValue?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
    value,
    max = 100,
    size = 'md',
    variant = 'default',
    animated = false,
    showValue = false,
    className,
    ...props
}) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={classNames('labs-progress-wrapper', className)}>
            <div
                className={classNames(
                    'labs-progress',
                    `labs-progress--${size}`,
                    `labs-progress--${variant}`,
                    animated && 'labs-progress--animated'
                )}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={max}
                {...props}
            >
                <div
                    className="labs-progress__bar"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {showValue && (
                <div className="labs-progress-value" style={{ marginTop: '4px', fontSize: '12px', textAlign: 'right', color: 'var(--text-muted)' }}>
                    {Math.round(percentage)}%
                </div>
            )}
        </div>
    );
};

Progress.displayName = 'Progress';
