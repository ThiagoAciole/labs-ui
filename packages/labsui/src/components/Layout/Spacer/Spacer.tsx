import React from 'react';

interface SpacerProps {
    size?: number | string;
    axis?: 'horizontal' | 'vertical';
    style?: React.CSSProperties;
}

export const Spacer: React.FC<SpacerProps> = ({
    size = '1rem',
    axis = 'vertical',
    style = {}
}) => {
    const width = axis === 'vertical' ? 1 : size;
    const height = axis === 'horizontal' ? 1 : size;

    return (
        <span
            style={{
                display: 'block',
                width,
                minWidth: width,
                height,
                minHeight: height,
                ...style,
            }}
        />
    );
};





