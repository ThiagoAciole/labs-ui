import { useState } from 'react';
import { TopBar, Icon, IconButton, Heading, Text } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TopBarPage() {
    const [activeTab, setActiveTab] = useState('Home');

    const navItems = [
        { label: 'Início', active: activeTab === 'Home', onClick: () => setActiveTab('Home') },
        { label: 'Recursos', active: activeTab === 'Features', onClick: () => setActiveTab('Features') },
        { label: 'Preços', active: activeTab === 'Pricing', onClick: () => setActiveTab('Pricing') },
        { label: 'Blog', active: activeTab === 'Blog', onClick: () => setActiveTab('Blog') },
    ];

    const extraContent = (
        <div style={{ display: 'flex', gap: '8px' }}>
            <IconButton appearance="ghost" color="gray" size="sm" icon="search" aria-label="Search" />
            <IconButton appearance="ghost" color="gray" size="sm" icon="user" aria-label="User Profile" />
        </div>
    );

    return (
        <Playground.Root
            componentName="TopBar"
            defaultProps={{
                logo: 'LabsUI',
                navPosition: 'center',
                sticky: false,
                themeToggle: true
            }}
            controls={{
                logo: { type: 'text' },
                navPosition: {
                    type: 'select',
                    options: [
                        { value: 'center', label: 'Center' },
                        { value: 'right', label: 'Right' }
                    ]
                },
                sticky: { type: 'boolean' },
                themeToggle: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="TopBar"
                description="O TopBar é o elemento principal de navegação superior, fornecendo branding, links de navegação e controles globais como troca de tema."
                aside={<Playground.Controls />}
            >
                <div style={{ background: 'var(--color--grayLight)', padding: '2rem', borderRadius: 'var(--radius--xl)', overflow: 'hidden' }}>
                    <Playground.Preview render={(props) => (
                        <div style={{ border: '1px solid var(--color--grayDark)', borderRadius: 'var(--radius--lg)', overflow: 'hidden' }}>
                            <TopBar
                                {...props}
                                navItems={navItems}
                                extraContent={extraContent}
                            />
                        </div>
                    )} />
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Características</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li><strong>Responsivo:</strong> Adapta-se automaticamente a diferentes larguras de tela.</li>
                            <li><strong>Posicionamento:</strong> Flexibilidade para colocar a navegação no centro ou à direita.</li>
                            <li><strong>Theme Aware:</strong> Pronta integração com o `ThemeProvider` para troca de temas.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




