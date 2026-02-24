import { Grid, Card, CardBody, Heading, Text } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function GridPage() {
    return (
        <Playground.Root
            componentName="Grid"
            defaultProps={{
                columns: '3',
                gap: '4'
            }}
            controls={{
                columns: {
                    type: 'select',
                    options: [
                        { value: '1', label: '1 Coluna' },
                        { value: '2', label: '2 Colunas' },
                        { value: '3', label: '3 Colunas' },
                        { value: '4', label: '4 Colunas' },
                        { value: '6', label: '6 Colunas' },
                        { value: '12', label: '12 Colunas' }
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
                }
            }}
        >
            <ShowcasePage
                title="Grid"
                description="O Grid permite organizar elementos em colunas e linhas baseadas no sistema CSS Grid, facilitando a criação de layouts estruturados."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%' }}>
                        <Grid columns={Number(props.columns) as any} gap={props.gap}>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Card key={i} variant="outlined">
                                    <CardBody style={{ padding: '2rem', textAlign: 'center' }}>
                                        <Text weight="bold" color="primary">{i}</Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </Grid>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Sistema de Colunas</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Text>
                            O componente Grid usa um sistema simplificado de colunas repetidas. Para layouts mais complexos com áreas nomeadas, recomenda-se o uso de CSS Grid personalizado ou Flexbox.
                        </Text>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




