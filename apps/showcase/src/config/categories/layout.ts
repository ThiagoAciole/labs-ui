import type { ComponentGroup } from '../componentTypes';
import ContainerPage from '../../pages/Layout/ContainerPage';
import FlexPage from '../../pages/Layout/FlexPage';
import GridPage from '../../pages/Layout/GridPage';
import SidebarPage from '../../pages/Layout/SidebarPage';
import SpacerPage from '../../pages/Layout/SpacerPage';
import DividerPage from '../../pages/Layout/DividerPage';
import PageHeaderPage from '../../pages/Layout/PageHeaderPage';

export const layoutComponents: ComponentGroup = {
    title: 'Layout',
    icon: 'layout-template',
    items: [
        { id: 'container', name: 'Container', icon: 'box', component: ContainerPage },
        { id: 'flex', name: 'Flex', icon: 'align-horizontal', component: FlexPage },
        { id: 'grid', name: 'Grid', icon: 'grid', component: GridPage },
        { id: 'sidebar', name: 'Sidebar', icon: 'panel-left', component: SidebarPage },
        { id: 'spacer', name: 'Spacer', icon: 'ruler', component: SpacerPage },
        { id: 'divider', name: 'Divider', icon: 'minus', component: DividerPage },
        { id: 'pageheader', name: 'PageHeader', icon: 'heading1', component: PageHeaderPage }
    ]
};



