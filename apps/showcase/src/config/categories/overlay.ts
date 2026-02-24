import type { ComponentGroup } from '../componentTypes';
import ModalPage from '../../pages/Overlay/ModalPage';
import DrawerPage from '../../pages/Overlay/DrawerPage';
import TooltipPage from '../../pages/Overlay/TooltipPage';

export const overlayComponents: ComponentGroup = {
    title: 'Overlay',
    icon: 'panel-left',
    items: [
        { id: 'modal', name: 'Modal', icon: 'app-window', component: ModalPage },
        { id: 'drawer', name: 'Drawer', icon: 'panel-left', component: DrawerPage },
        { id: 'tooltip', name: 'Tooltip', icon: 'message-circle', component: TooltipPage }
    ]
};



