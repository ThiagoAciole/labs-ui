import { Flex, Button, Heading, Text, Card, CardBody } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function FlexPage() {
    return (
        <Playground.Root
            componentName="Flex"
            defaultProps={{
                direction: 'row',
                justify: 'flex-start',
                align: 'stretch',
                gap: '4',
                wrap: 'nowrap'
            }}
            controls={{
                direction: {
                    type: 'select',
                    options: [
                        { value: 'row', label: 'Row' },
                        { value: 'column', label: 'Column' },
                        { value: 'row-reverse', label: 'Row Reverse' },
                        { value: 'column-reverse', label: 'Column Reverse' }
                    ]
                },
                justify: {
                    type: 'select',
                    options: [
                        { value: 'flex-start', label: 'Start' },
                        { value: 'center', label: 'Center' },
                        { value: 'flex-end', label: 'End' },
                        { value: 'space-between', label: 'Space Between' },
                        { value: 'space-around', label: 'Space Around' },
                        { value: 'space-evenly', label: 'Space Evenly' }
                    ]
                },
                align: {
                    type: 'select',
                    options: [
                        { value: 'flex-start', label: 'Start' },
                        { value: 'center', label: 'Center' },
                        { value: 'flex-end', label: 'End' },
                        { value: 'stretch', label: 'Stretch' },
                        { value: 'baseline', label: 'Baseline' }
                    ]
                },
                gap: {
                    type: 'select',
                    options: [
                        { value: '0', label: 'None' },
                        { value: '2', label: 'Small' },
                        { value: '4', label: 'Medium' },
                        { value: '8', label: 'Large' },
                        { value: '12', label: 'XLarge' }
                    ]
                },
                wrap: {
                    type: 'select',
                    options: [
                        { value: 'nowrap', label: 'No Wrap' },
                        { value: 'wrap', label: 'Wrap' },
                        { value: 'wrap-reverse', label: 'Wrap Reverse' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Flex"
                description="O componente Flex é um utilitário de layout baseado em CSS Flexbox, tornando simples a criação de alinhamentos e distribuições complexas."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ padding: '1rem', border: '1px solid var(--color--grayDark)', borderRadius: 'var(--radius--lg)', minHeight: '200px', display: 'flex', width: '100%' }}>
                        <Flex {...props} style={{ width: '100%' }}>
                            <Card style={{ minWidth: '80px', textAlign: 'center' }}>
                                <CardBody style={{ padding: '1rem' }}><Text weight="bold">1</Text></CardBody>
                            </Card>
                            <Card style={{ minWidth: '80px', textAlign: 'center' }}>
                                <CardBody style={{ padding: '1rem' }}><Text weight="bold">2</Text></CardBody>
                            </Card>
                            <Card style={{ minWidth: '80px', textAlign: 'center' }}>
                                <CardBody style={{ padding: '1rem' }}><Text weight="bold">3</Text></CardBody>
                            </Card>
                        </Flex>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Dicas de Layout</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Use <code>gap</code> em vez de margens manuais para manter um espaçamento consistente.</li>
                            <li>A propriedade <code>direction="column"</code> empilha os itens verticalmente.</li>
                            <li>Combine com <code>Flex</code> aninhados para criar layouts altamente complexos e responsivos.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




