import './Skeleton.css';
import React from 'react';
import { classNames } from '../../utils/classNames';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number;
    height?: string | number;
    circle?: boolean;
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    circle = false,
    className,
    style,
    ...props
}) => {
    const customStyle = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style
    };

    return (
        <div
            className={classNames(
                'labs-skeleton',
                circle && 'labs-skeleton--circle',
                className
            )}
            style={customStyle}
            {...props}
        />
    );
};

Skeleton.displayName = 'Skeleton';
