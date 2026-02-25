import './Divider.css';
import { classNames } from '../../../utils/classNames';

export interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    label?: string;
    className?: string;
}

export function Divider({ orientation = 'horizontal', label, className }: DividerProps) {
    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={classNames(
                'divider',
                `divider--${orientation}`,
                label && 'divider--labeled',
                className
            )}
        >
            {label && orientation === 'horizontal' && (
                <span className="divider__label">{label}</span>
            )}
        </div>
    );
}





