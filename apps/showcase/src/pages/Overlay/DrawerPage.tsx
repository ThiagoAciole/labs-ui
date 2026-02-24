import { useState } from 'react';
import { Drawer, Button, Heading, Text, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function DrawerPage() {
    const [open, setOpen] = useState(false);

    return (
        <Playground.Root
            componentName="Drawer"
            defaultProps={{
                title: 'Painel Lateral',
                placement: 'right',
                size: 'md'
            }}
            controls={{
                title: { type: 'text' },
                placement: {
                    type: 'select',
                    options: [
                        { value: 'left', label: 'Left' },
                        { value: 'right', label: 'Right' },
                        { value: 'top', label: 'Top' },
                        { value: 'bottom', label: 'Bottom' }
                    ]
                },
                size: {
                    type: 'select',
                    options: [
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                        { value: 'full', label: 'Full Screen' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Drawer"
                description="Painéis que deslizam das bordas da tela, úteis para navegação secundária, filtros ou formulários rápidos."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                        <Button onClick={() => setOpen(true)}>Abrir Painel Lateral</Button>
                        <Drawer
                            {...props}
                            isOpen={open}
                            onClose={() => setOpen(false)}
                            footer={
                                <Flex gap="2">
                                    <Button appearance="ghost" full onClick={() => setOpen(false)}>Cancelar</Button>
                                    <Button full onClick={() => setOpen(false)}>Salvar Mudanças</Button>
                                </Flex>
                            }
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <section>
                                    <Heading size="sm" style={{ marginBottom: '0.5rem' }}>Configurações de Notificação</Heading>
                                    <Text size="sm" color="gray">Visualize e edite como você recebe alertas do sistema.</Text>
                                </section>
                                <section>
                                    <Text>Conteúdo rico, formulários ou listas podem ser colocados aqui dentro.</Text>
                                </section>
                            </div>
                        </Drawer>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Casos de Uso</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li><strong>Navegação:</strong> Menus em dispositivos móveis que vêm pela esquerda.</li>
                            <li><strong>Filtros:</strong> Opções de filtragem em listas de produtos.</li>
                            <li><strong>Edição Rápida:</strong> Formulários de edição que não precisam trocar a página.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




