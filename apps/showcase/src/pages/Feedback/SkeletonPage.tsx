import { Skeleton, Card, CardBody, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function SkeletonPage() {
    return (
        <Playground.Root
            componentName="Skeleton"
            defaultProps={{
                width: '100%',
                height: '40px',
                circle: false,
                animated: true
            }}
            controls={{
                width: { type: 'text' },
                height: { type: 'text' },
                circle: { type: 'boolean' },
                animated: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Skeleton"
                description="O Skeleton é usado para fornecer um feedback visual de que o conteúdo está sendo carregado, imitando a estrutura final da página."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '200px' }}>
                        <Skeleton {...props} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplo de Card</Heading>
                    <Card style={{ maxWidth: '400px', width: '100%', marginTop: '1.5rem' }}>
                        <CardBody>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Skeleton circle width={48} height={48} />
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <Skeleton height={14} width="60%" />
                                    <Skeleton height={10} width="40%" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Skeleton height={100} />
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <Skeleton height={32} width={80} radius="" />
                                    <Skeleton height={32} width={80} radius="md" />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




