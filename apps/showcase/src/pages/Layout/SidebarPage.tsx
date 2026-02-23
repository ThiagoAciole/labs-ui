import { useState } from 'react';
import {
    Sidebar, Icon, Avatar, IconButton, Container, Flex, Heading, Text, Badge, Card, CardHeader, CardBody
} from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';

export default function SidebarPage() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState('Overview');
    const [simpleActiveTab, setSimpleActiveTab] = useState('Home');

    const code = `<Sidebar defaultCollapsed={false}>
                <Sidebar.Header
                    icon={<Icon name="box" size={28} color="var(--labs-primary)" />}
                    logo={<img src={logoDark} alt="LabsUI Logo" style={{ height: '20px', marginLeft: '8px' }} />}
                    onClick={() => {}}
                >
                    <Badge variant="primary" size="sm">v0.1.0</Badge>
                </Sidebar.Header>
    
    <Sidebar.Nav>
        <Sidebar.Group title="Dashboard" icon={<Icon name="layout" />} defaultExpanded={true}>
            <Sidebar.Item icon={<Icon name="home" />} active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
                Overview
            </Sidebar.Item>
            <Sidebar.Item icon={<Icon name="settings" />} active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
                Settings
            </Sidebar.Item>
        </Sidebar.Group>
    </Sidebar.Nav>
    
    <Sidebar.Footer>
        <Sidebar.User 
            avatar={<Avatar initials="JD" color="primary" />}
            name="John Doe"
            description="Admin"
            action={<IconButton icon={<Icon name="log-out" />} variant="ghost" size="sm" />}
        />
    </Sidebar.Footer>
</Sidebar>`;

    const simpleCode = `<Sidebar>
    <Sidebar.Header icon={<Icon name="box" />} logo={<span>LabsUI</span>} />
    <Sidebar.Nav>
        <Sidebar.Item icon={<Icon name="home" />} active={activeTab === 'Home'} onClick={() => setActiveTab('Home')}>
            Home
        </Sidebar.Item>
        <Sidebar.Item icon={<Icon name="user" />} active={activeTab === 'Profile'} onClick={() => setActiveTab('Profile')}>
            Profile
        </Sidebar.Item>
        <Sidebar.Item icon={<Icon name="settings" />} active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')}>
            Settings
        </Sidebar.Item>
    </Sidebar.Nav>
</Sidebar>`;

    return (
        <ShowcasePage
            title="Sidebar"
            description="Menu lateral principal para aplicação, incluindo um cabeçalho, navegação com itens colapsáveis e um rodapé de usuário. Totalmente baseado em CSS puro (BEM)."
            code={code}
        >
            <Flex direction="column" gap="8" style={{ width: '100%' }}>
                {/* Exemplo 1: Sidebar Simples */}
                <Card variant="outlined" padding="none">
                    <CardHeader
                        title="Sidebar Simples"
                        description="Um exemplo simplificado sem agrupamentos, ideal para navegações mais diretas."
                        icon="layout-template"
                    />
                    <CardBody>
                        <div style={{ height: '400px', display: 'flex', overflow: 'hidden' }}>
                            <Sidebar defaultCollapsed={false}>
                                <Sidebar.Header
                                    icon={<Icon name="box" size={24} color="var(--labs-primary)" />}
                                    logo={<span style={{ fontWeight: 'bold', marginLeft: '8px' }}>SimpleUI</span>}
                                />
                                <Sidebar.Nav>
                                    <Sidebar.Item
                                        icon={<Icon name="home" />}
                                        active={simpleActiveTab === 'Home'}
                                        onClick={() => setSimpleActiveTab('Home')}
                                    >
                                        Home
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        icon={<Icon name="user" />}
                                        active={simpleActiveTab === 'Profile'}
                                        onClick={() => setSimpleActiveTab('Profile')}
                                    >
                                        Profile
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        icon={<Icon name="settings" />}
                                        active={simpleActiveTab === 'Settings'}
                                        onClick={() => setSimpleActiveTab('Settings')}
                                    >
                                        Settings
                                    </Sidebar.Item>
                                </Sidebar.Nav>
                            </Sidebar>
                            <div style={{ flex: 1, padding: '2rem', backgroundColor: 'var(--labs-background-soft)' }}>
                                <Heading size={4}>{simpleActiveTab}</Heading>
                                <Text color="muted">Conteúdo da página {simpleActiveTab}</Text>
                            </div>
                        </div>
                    </CardBody>
                    <div style={{ padding: '1.5rem', borderTop: '1px solid var(--labs-border)' }}>
                        <div className="control-label" style={{ marginBottom: '1rem' }}>Código (Simples)</div>
                        <div className="code-snippet">
                            <pre><code>{simpleCode}</code></pre>
                        </div>
                    </div>
                </Card>

                {/* Exemplo 2: Sidebar Completa */}
                <Card variant="outlined" padding="none">
                    <CardHeader
                        title="Sidebar Completa"
                        description="Menu lateral completo com grupos expansíveis, cabeçalho rico e perfil de usuário."
                        icon="panel-left"
                    />
                    <CardBody>
                        <div style={{ height: '600px', display: 'flex', overflow: 'hidden' }}>
                            <Sidebar collapsed={collapsed} onToggle={setCollapsed}>
                                <Sidebar.Header
                                    icon={<Icon name="box" size={32} color="var(--labs-primary)" />}
                                    logo={<span style={{ marginLeft: '8px', fontWeight: 'bold', fontSize: '1.25rem' }}>LabsUI</span>}
                                >
                                    <Badge variant="primary" size="sm">v0.1.0</Badge>
                                </Sidebar.Header>

                                <Sidebar.Nav>
                                    <Sidebar.Group
                                        title="Main Menu"
                                        icon={<Icon name="layout" />}
                                        active={['Overview', 'Analytics', 'Ecommerce', 'Customers'].includes(activeTab)}
                                        defaultExpanded={true}
                                    >
                                        <Sidebar.Item icon={<Icon name="home" />} active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')}>
                                            Overview
                                        </Sidebar.Item>
                                        <Sidebar.Item icon={<Icon name="activity" />} active={activeTab === 'Analytics'} onClick={() => setActiveTab('Analytics')}>
                                            Analytics
                                        </Sidebar.Item>
                                        <Sidebar.Item icon={<Icon name="shopping-cart" />} active={activeTab === 'Ecommerce'} onClick={() => setActiveTab('Ecommerce')}>
                                            E-Commerce
                                        </Sidebar.Item>
                                        <Sidebar.Item icon={<Icon name="user" />} active={activeTab === 'Customers'} onClick={() => setActiveTab('Customers')}>
                                            Customers
                                        </Sidebar.Item>
                                    </Sidebar.Group>

                                    <Sidebar.Group
                                        title="System"
                                        icon={<Icon name="settings" />}
                                        active={activeTab === 'Settings'}
                                        defaultExpanded={true}
                                    >
                                        <Sidebar.Item icon={<Icon name="settings" />} active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')}>
                                            Settings
                                        </Sidebar.Item>
                                    </Sidebar.Group>
                                </Sidebar.Nav>

                                <Sidebar.Footer>
                                    <Sidebar.User
                                        avatar={<Avatar initials="JD" color="primary" size="sm" />}
                                        name="John Doe"
                                        description="johndoe@labs.com"
                                        action={
                                            <IconButton
                                                icon={<Icon name="log-out" size={16} color="var(--labs-danger)" />}
                                                variant="ghost"
                                                size="sm"
                                                aria-label="Logout"
                                            />
                                        }
                                    />
                                </Sidebar.Footer>
                            </Sidebar>

                            <div style={{ flex: 1, padding: '2rem', backgroundColor: 'var(--labs-background-soft)' }}>
                                <Heading size={2}>{activeTab}</Heading>
                                <Text color="muted" style={{ marginTop: '1rem' }}>
                                    A largura do conteúdo se ajusta fluidamente enquanto o menu lateral é colapsado ou retraído, usando pura transição de CSS grid/flex do projeto LabsUI.
                                </Text>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Flex>
        </ShowcasePage>
    );
}
