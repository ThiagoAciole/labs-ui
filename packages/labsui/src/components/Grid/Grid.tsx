import React from 'react';
import './Grid.css';
import { classNames } from '../../utils/classNames';

interface GridProps {
    children: React.ReactNode;
    columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
    className?: string;
    style?: React.CSSProperties;
    as?: React.ElementType;
}

export const Grid: React.FC<GridProps> = ({
    children,
    columns = 1,
    gap = '4',
    className,
    style,
    as: Component = 'div',
}) => {
    return (
        <Component
            className={classNames(
                'labs-grid',
                `labs-grid-cols--${columns}`,
                `labs-grid-gap--${gap}`,
                className
            )}
            style={style}
        >
            {children}
        </Component>
    );
};
