import { useState } from 'react';
import {
    Sidebar, Icon, Avatar, IconButton, Flex, Heading, Text, Badge, Button
} from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function SidebarPage() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [panelOpen, setPanelOpen] = useState(true);
    const [activePanelTab, setActivePanelTab] = useState('Elements');

    return (
        <Playground.Root
            componentName="Sidebar"
            defaultProps={{
                collapsed: false
            }}
            controls={{
                collapsed: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Sidebar"
                description="O Sidebar é o centro de navegação da aplicação. Ele suporta agrupamentos, colapsamento suave e integração direta com perfis de usuário."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ height: '600px', display: 'flex', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--lg)', overflow: 'hidden' }}>
                        <Sidebar {...props}>
                            <Sidebar.Header
                                icon={<Icon name="box" size={32} color="primary" />}
                                logo={<span style={{ marginLeft: '8px', fontWeight: 'bold', fontSize: '1.25rem' }}>LabsUI</span>}
                            >
                                <Badge color="primary" size="sm">v1.2.0</Badge>
                            </Sidebar.Header>

                            <Sidebar.Nav>
                                <Sidebar.Group
                                    title="Dashboard"
                                    icon={<Icon name="layout" />}
                                    active={['Overview', 'Analytics'].includes(activeTab)}
                                    defaultExpanded={true}
                                >
                                    <Sidebar.Item icon={<Icon name="home" />} active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')}>
                                        Overview
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={<Icon name="activity" />} active={activeTab === 'Analytics'} onClick={() => setActiveTab('Analytics')}>
                                        Analytics
                                    </Sidebar.Item>
                                </Sidebar.Group>

                                <Sidebar.Group
                                    title="Configurações"
                                    icon={<Icon name="settings" />}
                                    active={activeTab === 'Settings'}
                                >
                                    <Sidebar.Item icon={<Icon name="settings" />} active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')}>
                                        Geral
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
                                            icon="log-out"
                                            variant="ghost" color="neutral"
                                            size="sm"
                                            aria-label="Logout"
                                        />
                                    }
                                />
                            </Sidebar.Footer>
                        </Sidebar>

                        <div style={{ flex: 1, padding: '2rem', backgroundColor: 'var(--surface-alt)' }}>
                            <Heading size="lg">{activeTab}</Heading>
                            <Text color="disabled" style={{ marginTop: '1rem' }}>
                                A largura da área de conteúdo se adapta automaticamente quando a Sidebar é colapsada.
                            </Text>
                        </div>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Dicas de Organização</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Agrupe itens relacionados em `Sidebar.Group` para facilitar a navegação.</li>
                            <li>Use `Sidebar.User` no rodapé para ações globais de conta.</li>
                            <li>Em telas menores, considere manter a Sidebar colapsada por padrão para ganhar espaço.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
            <div style={{ marginTop: '4rem' }}>
                <Heading size="m">Sidebar com Painel de Ferramentas</Heading>
                <Text color="neutral" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                    Você pode combinar a Sidebar em modo colapsado com o `Sidebar.Panel` para criar uma interface de duas colunas comum em editores.
                </Text>
                <div style={{ height: '600px', display: 'flex', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--lg)', overflow: 'hidden' }}>
                    <Sidebar collapsed={true}>
                        <Sidebar.Header icon={<Icon name="box" size={32} color="primary" />} />
                        <Sidebar.Nav style={{ paddingTop: '2rem' }}>
                            <Sidebar.Item icon={<Icon name="grid" />} active={activePanelTab === 'Elements'} onClick={() => setActivePanelTab('Elements')} />
                            <Sidebar.Item icon={<Icon name="type" />} active={activePanelTab === 'Text'} onClick={() => setActivePanelTab('Text')} />
                            <Sidebar.Item icon={<Icon name="image" />} active={activePanelTab === 'Images'} onClick={() => setActivePanelTab('Images')} />
                        </Sidebar.Nav>
                    </Sidebar>

                    <Sidebar.Panel
                        open={panelOpen}
                        title="Elementos"
                        onToggle={() => setPanelOpen(!panelOpen)}
                        side="left"
                        collapsible={false}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ padding: '1rem', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--md)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius--sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                                    <Icon name="type" />
                                </div>
                                <div>
                                    <Heading size="sm">Texto</Heading>
                                    <Text size="sm" color="disabled">Adicionar campo de texto</Text>
                                </div>
                            </div>
                            <div style={{ padding: '1rem', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--md)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius--sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                                    <Icon name="square" />
                                </div>
                                <div>
                                    <Heading size="sm">Formas</Heading>
                                    <Text size="sm" color="disabled">Quadrados, círculos e linhas</Text>
                                </div>
                            </div>
                            <div style={{ padding: '1rem', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--md)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--surface-alt)', borderRadius: 'var(--radius--sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                                    <Icon name="star" />
                                </div>
                                <div>
                                    <Heading size="sm">Ícones</Heading>
                                    <Text size="sm" color="disabled">Biblioteca de ícones SVG</Text>
                                </div>
                            </div>
                        </div>
                    </Sidebar.Panel>

                    <div style={{ flex: 1, padding: '2rem', backgroundColor: 'var(--surface-alt)' }}>
                        <Heading size="lg">Canvas Placeholder</Heading>
                    </div>
                </div>
            </div>

        </Playground.Root>);
}





