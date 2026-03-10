import type { ComponentGroup } from '../componentTypes';
import HeadingPage from '../../pages/Typography/HeadingPage';
import TextPage from '../../pages/Typography/TextPage';
import IconsPage from '../../pages/Typography/IconsPage';
import LinkPage from '../../pages/Typography/LinkPage';
import CodePage from '../../pages/Typography/CodePage';

export const typographyComponents: ComponentGroup = {
    title: 'Typography',
    icon: 'type',
    items: [
        { id: 'heading', name: 'Heading', icon: 'type', component: HeadingPage },
        { id: 'text', name: 'Text', icon: 'type', component: TextPage },
        { id: 'code', name: 'Code', icon: 'type', component: CodePage },
        { id: 'icons', name: 'Icons', icon: 'sparkles', component: IconsPage },
        { id: 'link', name: 'Link', icon: 'link', component: LinkPage },
    ]
};
