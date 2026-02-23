import './Loader.css';
import { classNames } from '../../utils/classNames';

export type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';
export type LoaderVariant = 'primary' | 'white' | 'muted';

export interface LoaderProps {
    size?: LoaderSize;
    variant?: LoaderVariant;
    className?: string;
    label?: string;
}

export function Loader({ size = 'md', variant = 'primary', className, label = 'Loading...' }: LoaderProps) {
    return (
        <span
            role="status"
            aria-label={label}
            className={classNames('labs-loader', `labs-loader--${size}`, `labs-loader--${variant}`, className)}
        >
            <span className="labs-loader__ring" />
            <span className="labs-sr-only">{label}</span>
        </span>
    );
}
