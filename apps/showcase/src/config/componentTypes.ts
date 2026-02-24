import type { ComponentType } from 'react';

export interface ComponentItem {
    id: string;
    name: string;
    icon: string;
    component: ComponentType;
}

export interface ComponentGroup {
    title: string;
    icon: string;
    items: ComponentItem[];
}



