import type { ComponentGroup } from '../componentTypes';
import FigmaExportPage from '../../pages/Internal/FigmaExportPage';

export const internalComponents: ComponentGroup = {
    title: 'Internal Tools',
    icon: 'settings',
    items: [
        { id: 'figma-export', name: 'Figma Export', icon: 'figma', component: FigmaExportPage }
    ]
};
