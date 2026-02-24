import type { ComponentGroup } from '../componentTypes';
import LinkPage from '../../pages/Navigation/LinkPage';
import BreadcrumbPage from '../../pages/Navigation/BreadcrumbPage';
import TabsPage from '../../pages/Navigation/TabsPage';
import PaginationPage from '../../pages/Navigation/PaginationPage';
import DropdownPage from '../../pages/Navigation/DropdownPage';
import TopBarPage from '../../pages/Navigation/TopBarPage';

export const navigationComponents: ComponentGroup = {
    title: 'Navigation',
    icon: 'external-link',
    items: [
        { id: 'link', name: 'Link', icon: 'link', component: LinkPage },
        { id: 'breadcrumb', name: 'Breadcrumb', icon: 'milestone', component: BreadcrumbPage },
        { id: 'tabs', name: 'Tabs', icon: 'folder', component: TabsPage },
        { id: 'pagination', name: 'Pagination', icon: 'more-horizontal', component: PaginationPage },
        { id: 'dropdown', name: 'Dropdown Menu', icon: 'chevron-down', component: DropdownPage },
        { id: 'topbar', name: 'TopBar', icon: 'layout-template', component: TopBarPage }
    ]
};



