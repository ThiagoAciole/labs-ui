import type { ComponentGroup } from '../componentTypes';
import ListPage from '../../pages/DataDisplay/ListPage';
import AvatarPage from '../../pages/DataDisplay/AvatarPage';
import BadgePage from '../../pages/DataDisplay/BadgePage';
import TagPage from '../../pages/DataDisplay/TagPage';
import TablePage from '../../pages/DataDisplay/TablePage';
import TimelinePage from '../../pages/DataDisplay/TimelinePage';
import AccordionPage from '../../pages/DataDisplay/AccordionPage';
import EmptyStatePage from '../../pages/DataDisplay/EmptyStatePage';
import ImagePage from '../../pages/DataDisplay/ImagePage';
import CardPage from '../../pages/DataDisplay/CardPage';

export const dataDisplayComponents: ComponentGroup = {
    title: 'DataDisplay',
    icon: 'database',
    items: [
        { id: 'list', name: 'List', icon: 'list', component: ListPage },
        { id: 'avatar', name: 'Avatar', icon: 'user-circle', component: AvatarPage },
        { id: 'badge', name: 'Badge', icon: 'badge', component: BadgePage },
        { id: 'tag', name: 'Tag', icon: 'tag', component: TagPage },
        { id: 'table', name: 'Table', icon: 'table', component: TablePage },
        { id: 'timeline', name: 'Timeline', icon: 'git-commit', component: TimelinePage },
        { id: 'accordion', name: 'Accordion', icon: 'list-collapse', component: AccordionPage },
        { id: 'emptystate', name: 'EmptyState', icon: 'ghost', component: EmptyStatePage },
        { id: 'image', name: 'Image', icon: 'image', component: ImagePage },
        { id: 'card', name: 'Card', icon: 'panel-top', component: CardPage }
    ]
};



