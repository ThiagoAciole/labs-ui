import type { ComponentGroup } from '../componentTypes';
import HeadingPage from '../../pages/Typography/HeadingPage';
import TextPage from '../../pages/Typography/TextPage';
import IconsPage from '../../pages/Typography/IconsPage';

export const typographyComponents: ComponentGroup = {
    title: 'Typography',
    icon: 'type',
    items: [
        { id: 'heading', name: 'Heading', icon: 'type', component: HeadingPage },
        { id: 'text', name: 'Text', icon: 'type', component: TextPage },
        { id: 'icons', name: 'Icons', icon: 'sparkles', component: IconsPage }
    ]
};



