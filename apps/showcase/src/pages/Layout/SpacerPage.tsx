import { Spacer, Heading, Text, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function SpacerPage() {
    return (
        <Playground.Root
            componentName="Spacer"
            defaultProps={{
                size: '2rem'
            }}
            controls={{
                size: {
                    type: 'select',
                    options: [
                        { value: '0.5rem', label: 'XSmall (0.5rem)' },
                        { value: '1rem', label: 'Small (1rem)' },
                        { value: '2rem', label: 'Medium (2rem)' },
                        { value: '4rem', label: 'Large (4rem)' },
                        { value: '8rem', label: 'XLarge (8rem)' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Spacer"
                description="O componente Spacer é um utilitário simples usado para adicionar vácuo/espaço entre elementos sem a necessidade de margens manuais."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Flex direction="column" style={{ width: '100%', border: '1px dashed var(--border)', padding: '1rem', borderRadius: 'var(--labs-radius-md)' }}>
                        <div style={{ background: 'var(--surface-soft)', padding: '1rem', textAlign: 'center' }}>Elemento A</div>
                        <Spacer size={props.size} />
                        <div style={{ background: 'var(--surface-soft)', padding: '1rem', textAlign: 'center' }}>Elemento B</div>
                    </Flex>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Uso em Flexbox</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Text>
                            Embora o prop <code>gap</code> no componente Flex seja preferível para espaçamentos constantes, o <code>Spacer</code> é útil para criar vazios específicos ou dinâmicos que não seguem o padrão do container pai.
                        </Text>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
