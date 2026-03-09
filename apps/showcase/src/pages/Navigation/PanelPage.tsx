import { useState } from 'react';
import { Sidebar, Icon, Heading, Text, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function PanelPage() {
    const [open, setOpen] = useState(true);

    return (
        <Playground.Root
            componentName="Sidebar.Panel"
            defaultProps={{
                open: true,
                title: 'Meu Painel',
                side: 'left',
                collapsible: true
            }}
            controls={{
                open: { type: 'boolean' },
                title: { type: 'text' },
                side: { type: 'select', options: [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }] },
                collapsible: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Panel"
                description="O componente Panel é utilizado para criar painéis laterais de ferramentas ou informações, comuns em editores e dashboards complexos."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ height: '500px', display: 'flex', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--lg)', overflow: 'hidden', backgroundColor: 'var(--surface-alt)' }}>
                        {props.side === 'right' && (
                            <div style={{ flex: 1, padding: '2rem' }}>
                                <Heading size="lg">Área de Conteúdo</Heading>
                                <Text color="neutral" style={{ marginTop: '1rem' }}>
                                    O painel está posicionado à direita. Você pode alterar as configurações no playground.
                                </Text>
                            </div>
                        )}

                        <Sidebar.Panel
                            {...props}
                            open={props.open !== undefined ? props.open : open}
                            onToggle={() => {
                                if (props.onToggle) props.onToggle();
                                else setOpen(!open);
                            }}
                        >
                            <Flex direction="column" gap="4">
                                <Flex align="center" gap="3" style={{ padding: '12px', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--md)' }}>
                                    <Icon name="type" />
                                    <div>
                                        <Heading size="sm">Texto</Heading>
                                        <Text size="sm" color="disabled">Adicionar campo de texto</Text>
                                    </div>
                                </Flex>
                                <Flex align="center" gap="3" style={{ padding: '12px', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--md)' }}>
                                    <Icon name="square" />
                                    <div>
                                        <Heading size="sm">Forma geométrica</Heading>
                                        <Text size="sm" color="disabled">Retângulo, estrela, polígono</Text>
                                    </div>
                                </Flex>
                                <Flex align="center" gap="3" style={{ padding: '12px', border: '1px solid var(--border-neutral)', borderRadius: 'var(--radius--md)' }}>
                                    <Icon name="image" />
                                    <div>
                                        <Heading size="sm">Mídia</Heading>
                                        <Text size="sm" color="disabled">Upload de imagens ou vídeos</Text>
                                    </div>
                                </Flex>
                            </Flex>
                        </Sidebar.Panel>

                        {props.side === 'left' && (
                            <div style={{ flex: 1, padding: '2rem' }}>
                                <Heading size="lg">Área de Conteúdo</Heading>
                                <Text color="neutral" style={{ marginTop: '1rem' }}>
                                    O painel está posicionado à esquerda. A largura desta área de conteúdo adapta-se automaticamente quando o painel é recolhido ou expandido.
                                </Text>
                            </div>
                        )}
                    </div>
                )} />

            </ShowcasePage>
        </Playground.Root>
    );
}
