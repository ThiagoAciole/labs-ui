import React from 'react';
import { Icon, availableIcons } from '@labsui/core';

export const COLOR_OPTIONS = [
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'attention', label: 'Attention' },
    { value: 'error', label: 'Error' },
    { value: 'neutral', label: 'Neutral' },
];

export const VARIANT_OPTIONS = [
    { value: 'solid', label: 'Solid' },
    { value: 'soft', label: 'Soft' },
    { value: 'outline', label: 'Outline' },
    { value: 'ghost', label: 'Ghost' },
];

export const SIZE_OPTIONS = [
    { value: 'xs', label: 'Smallest' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
];

export const RADIUS_OPTIONS = [
    { value: 'none', label: 'None' },
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'XL' },
    { value: 'full', label: 'Full' },
];

export const PLACEMENT_OPTIONS = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'top-start', label: 'Top Start' },
    { value: 'top-end', label: 'Top End' },
    { value: 'bottom-start', label: 'Bottom Start' },
    { value: 'bottom-end', label: 'Bottom End' },
];

export const ICON_OPTIONS = availableIcons.map((icon) => ({
    value: icon,
    label: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Icon name={icon as any} size={16} />
            <span>{icon}</span>
        </span>
    ),
    searchValue: icon,
}));

export const ORIENTATION_OPTIONS = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' },
];
