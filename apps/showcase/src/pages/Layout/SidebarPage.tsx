import { useState } from 'react';
import {
    Sidebar, Icon, Avatar, IconButton, Flex, Heading, Text, Badge
} from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function SidebarPage() {
    const [activeTab, setActiveTab] = useState('Overview');

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
                    <div style={{ height: '600px', display: 'flex', border: '1px solid var(--color--grayDark)', borderRadius: 'var(--radius--lg)', overflow: 'hidden' }}>
                        <Sidebar {...props}>
                            <Sidebar.Header
                                icon={<Icon name="box" size={32} color="var(--color--violet)" />}
                                logo={<span style={{ marginLeft: '8px', fontWeight: 'bold', fontSize: '1.25rem' }}>LabsUI</span>}
                            >
                                <Badge color="violet" size="sm">v1.2.0</Badge>
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
                                            appearance="ghost" color="gray"
                                            size="sm"
                                            aria-label="Logout"
                                        />
                                    }
                                />
                            </Sidebar.Footer>
                        </Sidebar>

                        <div style={{ flex: 1, padding: '2rem', backgroundColor: 'var(--color--grayLight)' }}>
                            <Heading size="lg">{activeTab}</Heading>
                            <Text color="muted" style={{ marginTop: '1rem' }}>
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
        </Playground.Root>
    );
}





