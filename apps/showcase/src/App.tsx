import { useState, useEffect } from 'react';
import {
    useToast,
    Icon,
    Badge,
    TopBar,
    IconButton,
    Sidebar,
    ThemeProvider,
    ThemeToggle,
    useTheme,
    Flex,
    Container
} from '@aciolelabs/labs-ui';

// Pages por Categoria
// Docs
import InstallationPage from './pages/Docs/InstallationPage';

// Typography
import HeadingPage from './pages/Typography/HeadingPage';
import TextPage from './pages/Typography/TextPage';

import IconsPage from './pages/Typography/IconsPage';
// Form
import ButtonPage from './pages/Form/ButtonPage';
import IconButtonPage from './pages/Form/IconButtonPage';
import InputPage from './pages/Form/InputPage';
import TextAreaPage from './pages/Form/TextAreaPage';
import SearchPage from './pages/Form/SearchPage';
import SelectPage from './pages/Form/SelectPage';
import MultiSelectPage from './pages/Form/MultiSelectPage';
import CheckboxPage from './pages/Form/CheckboxPage';
import RadioPage from './pages/Form/RadioPage';
import SwitchPage from './pages/Form/SwitchPage';
import SliderPage from './pages/Form/SliderPage';
import DatePickerPage from './pages/Form/DatePickerPage';
import FileUploadPage from './pages/Form/FileUploadPage';
// DataDisplay
import ListPage from './pages/DataDisplay/ListPage';
import AvatarPage from './pages/DataDisplay/AvatarPage';
import BadgePage from './pages/DataDisplay/BadgePage';
import TagPage from './pages/DataDisplay/TagPage';
import TablePage from './pages/DataDisplay/TablePage';
import TimelinePage from './pages/DataDisplay/TimelinePage';
import AccordionPage from './pages/DataDisplay/AccordionPage';
import EmptyStatePage from './pages/DataDisplay/EmptyStatePage';
import ImagePage from './pages/DataDisplay/ImagePage';
import CardPage from './pages/DataDisplay/CardPage';
// Navigation
import LinkPage from './pages/Navigation/LinkPage';
import BreadcrumbPage from './pages/Navigation/BreadcrumbPage';
import TabsPage from './pages/Navigation/TabsPage';
import PaginationPage from './pages/Navigation/PaginationPage';
import DropdownPage from './pages/Navigation/DropdownPage';
import TopBarPage from './pages/Navigation/TopBarPage';
// Feedback
import ToastPage from './pages/Feedback/ToastPage';
import LoaderPage from './pages/Feedback/LoaderPage';
import ProgressPage from './pages/Feedback/ProgressPage';
import SkeletonPage from './pages/Feedback/SkeletonPage';
// Overlay
import ModalPage from './pages/Overlay/ModalPage';
import DrawerPage from './pages/Overlay/DrawerPage';
import TooltipPage from './pages/Overlay/TooltipPage';
// Layout
import ContainerPage from './pages/Layout/ContainerPage';
import FlexPage from './pages/Layout/FlexPage';
import GridPage from './pages/Layout/GridPage';
import SidebarPage from './pages/Layout/SidebarPage';
import SpacerPage from './pages/Layout/SpacerPage';
import DividerPage from './pages/Layout/DividerPage';
import PageHeaderPage from './pages/Layout/PageHeaderPage';


// Logos
import logoDark from './assets/Labs UI - Dark.svg';
import logoLight from './assets/Labs UI - Light.svg';
import icon from './assets/Icon.svg';

interface ComponentItem {
    id: string;
    name: string;
    icon: string;
    component: React.ComponentType;
}

interface ComponentGroup {
    title: string;
    icon: string;
    items: ComponentItem[];
}

const CATEGORIZED_COMPONENTS: ComponentGroup[] = [
    {
        title: 'Documentação',
        icon: 'file-text',
        items: [
            { id: 'installation', name: 'Instalação', icon: 'download', component: InstallationPage },
        ]
    },
    {
        title: 'Typography',
        icon: 'type',
        items: [
            { id: 'heading', name: 'Heading', icon: 'type', component: HeadingPage },
            { id: 'text', name: 'Text', icon: 'type', component: TextPage },
            { id: 'icons', name: 'Icons', icon: 'sparkles', component: IconsPage },
        ]
    },
    {
        title: 'Form',
        icon: 'form-input',
        items: [
            { id: 'button', name: 'Button', icon: 'rectangle-horizontal', component: ButtonPage },
            { id: 'icon-button', name: 'IconButton', icon: 'mouse-pointer', component: IconButtonPage },
            { id: 'input', name: 'Input', icon: 'text-cursor', component: InputPage },
            { id: 'textarea', name: 'TextArea', icon: 'form-input', component: TextAreaPage },
            { id: 'search', name: 'Search', icon: 'search', component: SearchPage },
            { id: 'select', name: 'Select', icon: 'list-filter', component: SelectPage },
            { id: 'multiselect', name: 'MultiSelect', icon: 'list-checks', component: MultiSelectPage },
            { id: 'checkbox', name: 'Checkbox', icon: 'check-square', component: CheckboxPage },
            { id: 'radio', name: 'Radio', icon: 'circle-dot', component: RadioPage },
            { id: 'switch', name: 'Switch', icon: 'toggle-right', component: SwitchPage },
            { id: 'slider', name: 'Slider', icon: 'sliders-horizontal', component: SliderPage },
            { id: 'datepicker', name: 'DatePicker', icon: 'calendar', component: DatePickerPage },
            { id: 'fileupload', name: 'FileUpload', icon: 'upload-cloud', component: FileUploadPage },
        ]
    },
    {
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
            { id: 'card', name: 'Card', icon: 'panel-top', component: CardPage },
        ]
    },
    {
        title: 'Navigation',
        icon: 'external-link',
        items: [
            { id: 'link', name: 'Link', icon: 'link', component: LinkPage },
            { id: 'breadcrumb', name: 'Breadcrumb', icon: 'milestone', component: BreadcrumbPage },
            { id: 'tabs', name: 'Tabs', icon: 'folder', component: TabsPage },
            { id: 'pagination', name: 'Pagination', icon: 'more-horizontal', component: PaginationPage },
            { id: 'dropdown', name: 'Dropdown Menu', icon: 'chevron-down', component: DropdownPage },
            { id: 'topbar', name: 'TopBar', icon: 'layout-template', component: TopBarPage },
        ]
    },
    {
        title: 'Feedback',
        icon: 'message-square',
        items: [
            { id: 'toast', name: 'Toast', icon: 'message-square', component: ToastPage },
            { id: 'loader', name: 'Loader', icon: 'loader2', component: LoaderPage },
            { id: 'progress', name: 'Progress', icon: 'activity', component: ProgressPage },
            { id: 'skeleton', name: 'Skeleton', icon: 'component', component: SkeletonPage },
        ]
    },
    {
        title: 'Overlay',
        icon: 'panel-left',
        items: [
            { id: 'modal', name: 'Modal', icon: 'app-window', component: ModalPage },
            { id: 'drawer', name: 'Drawer', icon: 'panel-left', component: DrawerPage },
            { id: 'tooltip', name: 'Tooltip', icon: 'message-circle', component: TooltipPage },
        ]
    },
    {
        title: 'Layout',
        icon: 'layout-template',
        items: [
            { id: 'container', name: 'Container', icon: 'box', component: ContainerPage },
            { id: 'flex', name: 'Flex', icon: 'align-horizontal', component: FlexPage },
            { id: 'grid', name: 'Grid', icon: 'grid', component: GridPage },
            { id: 'sidebar', name: 'Sidebar', icon: 'panel-left', component: SidebarPage },
            { id: 'spacer', name: 'Spacer', icon: 'ruler', component: SpacerPage },
            { id: 'divider', name: 'Divider', icon: 'minus', component: DividerPage },
            { id: 'pageheader', name: 'PageHeader', icon: 'heading1', component: PageHeaderPage },
        ]
    }
];

const ALL_COMPONENTS = CATEGORIZED_COMPONENTS.flatMap(group => group.items);

export default function App() {
    const [activeId, setActiveId] = useState(() => {
        const hash = window.location.hash.replace('#', '');
        return hash || 'installation';
    });
    const { theme } = useTheme();
    const { toast } = useToast();

    // Restaura o roteamento hash
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const isComp = ALL_COMPONENTS.find(c => c.id === hash);
            if (isComp) { setActiveId(hash); }
        }
    }, []);

    const handleNavigate = (id: string) => {
        setActiveId(id);
        window.location.hash = id;
    };

    const ActiveComponent = ALL_COMPONENTS.find(c => c.id === activeId)?.component;

    return (
        <Flex className="showcase-app">
            <Sidebar defaultCollapsed={window.innerWidth < 768}>
                <Sidebar.Header
                    icon={<img src={icon} alt="LabsUI Icon" style={{ height: '24px' }} />}
                    logo={<img src={theme === 'dark' ? logoDark : logoLight} alt="LabsUI Logo" style={{ height: '24px' }} />}
                />

                <Sidebar.Nav>
                    {CATEGORIZED_COMPONENTS.map((group) => (
                        <Sidebar.Group
                            key={group.title}
                            title={group.title}
                            icon={<Icon name={group.icon as any} size={20} />}
                            active={group.items.some((i) => i.id === activeId)}
                            defaultExpanded={true}
                        >
                            {group.items.map((item) => (
                                <Sidebar.Item
                                    key={item.id}
                                    icon={<Icon name={item.icon as any} />}
                                    active={activeId === item.id}
                                    onClick={() => handleNavigate(item.id)}
                                >
                                    {item.name}
                                </Sidebar.Item>
                            ))}
                        </Sidebar.Group>
                    ))}
                </Sidebar.Nav>
            </Sidebar>

            <Flex direction="column" className="showcase-content">
                <TopBar
                    sticky
                    themeToggle={true}
                />
                <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>
                    {
                        ActiveComponent ? (
                            <ActiveComponent />
                        ) : (
                            <div className="showcase-empty">
                                <Icon name="rocket" size={64} />
                                <h2>Selecione um item para começar</h2>
                            </div>
                        )
                    }
                </div>
            </Flex>
        </Flex>
    );
}
