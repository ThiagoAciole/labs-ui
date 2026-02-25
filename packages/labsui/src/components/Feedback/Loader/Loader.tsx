import './Loader.css';
import { classNames } from '../../../utils/classNames';
import { colorVar, type TokenColor } from '../../../utils/styleTokens';

export type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';

export interface LoaderProps {
    size?: LoaderSize;
    color?: TokenColor;
    className?: string;
    label?: string;
}

export function Loader({ size = 'md', color = 'primary', className, label = 'Loading...' }: LoaderProps) {
    return (
        <span role="status" aria-label={label} className={classNames('loader', `loader--${size}`, className)} style={{ ['--loader-color' as string]: colorVar(color) }}>
            <span className="loader__ring" />
            <span className="sr-only">{label}</span>
        </span>
    );
}

