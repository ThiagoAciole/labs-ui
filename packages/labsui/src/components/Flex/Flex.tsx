import React from 'react';
import './Flex.css';
import { classNames } from '../../utils/classNames';

interface FlexProps {
    children: React.ReactNode;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
    className?: string;
    style?: React.CSSProperties;
    as?: React.ElementType;
}

export const Flex: React.FC<FlexProps> = ({
    children,
    direction = 'row',
    align = 'stretch',
    justify = 'flex-start',
    wrap = 'nowrap',
    gap = '0',
    className,
    style,
    as: Component = 'div',
}) => {
    return (
        <Component
            className={classNames(
                'labs-flex',
                `labs-flex-direction--${direction}`,
                `labs-flex-align--${align}`,
                `labs-flex-justify--${justify}`,
                `labs-flex-wrap--${wrap}`,
                `labs-flex-gap--${gap}`,
                className
            )}
            style={style}
        >
            {children}
        </Component>
    );
};
