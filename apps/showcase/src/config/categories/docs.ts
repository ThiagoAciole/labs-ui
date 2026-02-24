import type { ComponentGroup } from '../componentTypes';
import InstallationPage from '../../pages/Docs/InstallationPage';

export const docsComponents: ComponentGroup = {
    title: 'Documentação',
    icon: 'file-text',
    items: [
        { id: 'installation', name: 'Instalação', icon: 'download', component: InstallationPage }
    ]
};



