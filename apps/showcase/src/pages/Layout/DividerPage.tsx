import { Divider, Heading, Text, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function DividerPage() {
    return (
        <Playground.Root
            componentName="Divider"
            defaultProps={{
                label: '',
                orientation: 'horizontal'
            }}
            controls={{
                label: { type: 'text' },
                orientation: {
                    type: 'select',
                    options: [
                        { value: 'horizontal', label: 'Horizontal' },
                        { value: 'vertical', label: 'Vertical' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Divider"
                description="O Divider é um elemento visual sutil usado para separar seções de conteúdo ou agrupar elementos relacionados."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Flex
                        direction={props.orientation === 'vertical' ? 'row' : 'column'}
                        justify="center"
                        align="center"
                        style={{ minHeight: '150px', width: '100%' }}
                    >
                        <Text color="gray">Seção Anterior</Text>
                        <Divider {...props} style={props.orientation === 'vertical' ? { height: '100px' } : { width: '100%' }} />
                        <Text color="gray">Seção Posterior</Text>
                    </Flex>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Uso Sugerido</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li><strong>Semântica:</strong> Use dividers para separar logicamente diferentes tópicos em uma página.</li>
                            <li><strong>Labels:</strong> Adicione labels curtos (como "OU" ou "OU ENTRAR COM") para adicionar contexto ao separador.</li>
                            <li><strong>Vertical:</strong> Em barras de ferramentas (toolbars), use divisores verticais para agrupar botões de funções similares.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




