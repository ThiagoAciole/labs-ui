import './Skeleton.css';
import React from 'react';
import { classNames } from '../../../utils/classNames';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string | number;
    height?: string | number;
    circle?: boolean;
    radius?: string | number;
    animated?: boolean;
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    circle = false,
    radius,
    animated = true,
    className,
    style,
    ...props
}) => {
    const customStyle = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: circle ? '50%' : (typeof radius === 'number' ? `${radius}px` : radius),
        ...style
    };

    return (
        <div
            className={classNames(
                'skeleton',
                circle && 'skeleton--circle',
                animated && 'skeleton--animated',
                className
            )}
            style={customStyle}
            {...props}
        />
    );
};

Skeleton.displayName = 'Skeleton';





