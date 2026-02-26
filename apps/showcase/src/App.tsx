import { useState, useEffect } from 'react';
import {
    Icon,
    TopBar,
    Sidebar,
    useTheme,
    Flex
} from '@aciolelabs/labs-ui';
import { ALL_COMPONENTS, CATEGORIZED_COMPONENTS } from './config/categories';

// Logos
import logoDark from './assets/Labs UI - Dark.svg';
import logoLight from './assets/Labs UI - Light.svg';
import icon from './assets/Icon.svg';

export default function App() {
    const [activeId, setActiveId] = useState(() => {
        const hash = window.location.hash.replace('#', '');
        return hash || 'installation';
    });
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (theme !== 'light') {
            setTheme('light');
        }
    }, [theme, setTheme]);

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

    const isFigmaExport = activeId === 'figma-export';
    const ActiveComponent = ALL_COMPONENTS.find(c => c.id === activeId)?.component;

    return (
        <Flex className="showcase-app">
            {!isFigmaExport && (
                <Sidebar defaultCollapsed={window.innerWidth < 768}>
                    <Sidebar.Header
                        icon={<img src={icon} alt="LabsUI Icon" style={{ height: '24px' }} />}
                        logo={<img src={logoLight} alt="LabsUI Logo" style={{ height: '24px' }} />}
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
            )}

            <Flex direction="column" className="showcase-content">
                {!isFigmaExport && (
                    <TopBar
                        sticky
                        themeToggle={false}
                    />
                )}
                <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', position: 'relative' }}>
                    {
                        ActiveComponent ? (
                            <ActiveComponent />
                        ) : (
                            <div className="showcase-empty">
                                <Icon name="rocket" size={64} />
                                <h2>Selecione um item para comecar</h2>
                            </div>
                        )
                    }
                </div>
            </Flex>
        </Flex>
    );
}




