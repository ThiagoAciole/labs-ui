import { DropdownMenu, Button, Icon, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function DropdownPage() {
    const defaultItems = [
        { label: 'Perfil', icon: <Icon name="user" size={14} /> },
        { label: 'Configurações', icon: <Icon name="settings" size={14} /> },
        { label: 'Histórico', icon: <Icon name="activity" size={14} /> },
        { separator: true },
        { label: 'Sair', icon: <Icon name="log-out" size={14} />, danger: true },
    ];

    return (
        <Playground.Root
            componentName="DropdownMenu"
            defaultProps={{
                align: 'start'
            }}
            controls={{
                align: {
                    type: 'select',
                    options: [
                        { value: 'start', label: 'Start' },
                        { value: 'end', label: 'End' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Dropdown Menu"
                description="Menus suspensos são usados para agrupar ações secundárias ou de navegação, mantendo a interface limpa e focada."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ paddingBottom: '150px' }}> {/* Espaço para o menu abrir */}
                        <DropdownMenu
                            {...props}
                            trigger={<Button variant="outline">Opções da Conta</Button>}
                            items={defaultItems}
                        />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Acessibilidade</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Suporte total a navegação por teclado (Setas, Enter, Esc).</li>
                            <li>Labels e ícones ajudam na identificação rápida das ações.</li>
                            <li>O uso de separadores ajuda a agrupar logicamente as opções de menu.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
