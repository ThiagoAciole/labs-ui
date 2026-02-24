import { List, ListItem, Avatar, Badge, Icon, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ListPage() {
    return (
        <Playground.Root
            componentName="List"
            defaultProps={{
                variant: 'default'
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'bordered', label: 'Bordered' },
                        { value: 'divided', label: 'Divided' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="List"
                description="Exibe fluxos contínuos de itens em uma única coluna vertical. Muito comum para listagem de configurações, contatos ou itens leves de banco de dados."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                        <List {...props}>
                            <ListItem
                                startContent={<Avatar initials="CS" size="sm" />}
                                description="csilva@labs.com"
                                endContent={<Badge color="green">Ativo</Badge>}
                            >
                                Carlos Silva
                            </ListItem>

                            <ListItem
                                startContent={<Avatar initials="MC" size="sm" color="primary" />}
                                description="mclara@labs.com"
                                endContent={<Badge color="yellow">Pausado</Badge>}
                            >
                                Maria Clara
                            </ListItem>

                            <ListItem
                                startContent={<Avatar initials="JP" size="sm" color="danger" />}
                                description="jpedro@labs.com"
                                endContent={<Badge color="red">Inativo</Badge>}
                                disabled
                            >
                                João Pedro
                            </ListItem>

                            <ListItem
                                startContent={<Icon name="settings" size={24} />}
                                description="Gerencie as configurações da sua organização."
                                endContent={<Icon name="chevron-right" size={16} />}
                            >
                                Configurações Globais
                            </ListItem>
                        </List>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Dicas de Uso</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Use <code>ListItem</code> para itens que tenham uma estrutura consistente (título, descrição, conteúdo extra).</li>
                            <li>A variante <code>divided</code> é excelente para separar itens visualmente sem adicionar bordas externas.</li>
                            <li>Tente manter o <code>endContent</code> com elementos simples como Badges, Ícones ou botões pequenos.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




