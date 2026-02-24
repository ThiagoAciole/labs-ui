import React, { HTMLAttributes } from 'react';
import { classNames } from '../../../utils';
import './DropdownContainer.css';

export interface DropdownContainerProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    children: React.ReactNode;
}

export const DropdownContainer: React.FC<DropdownContainerProps> = ({
    isOpen,
    children,
    className,
    ...props
}) => {
    if (!isOpen) return null;

    return (
        <div className={classNames('container', className)} {...props}>
            {children}
        </div>
    );
};
