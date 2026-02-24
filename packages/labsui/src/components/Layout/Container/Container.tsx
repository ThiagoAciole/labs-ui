import React from 'react';
import './Container.css';
import { classNames } from '../../../utils/classNames';

interface ContainerProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    className?: string;
    style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    size = 'lg',
    className,
    style
}) => {
    return (
        <div
            className={classNames('labs-container', `labs-container--${size}`, className)}
            style={style}
        >
            {children}
        </div>
    );
};





