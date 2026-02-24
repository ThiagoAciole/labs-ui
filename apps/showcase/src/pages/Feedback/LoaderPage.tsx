import { Loader, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function LoaderPage() {
    return (
        <Playground.Root
            componentName="Loader"
            defaultProps={{
                variant: 'primary',
                size: 'md'
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'primary', label: 'Primary' },
                        { value: 'secondary', label: 'Secondary' },
                        { value: 'muted', label: 'Muted' },
                    ]
                },
                size: {
                    type: 'select',
                    options: [
                        { value: 'xs', label: 'Extra Small' },
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                        { value: 'xl', label: 'Extra Large' },
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Loader"
                description="O Loader é um componente visual usado para indicar que um conteúdo ou ação está em processo de carregamento."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Loader {...props} />
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Escala de Tamanhos</Heading>
                    <Flex gap="8" style={{ marginTop: '1.5rem', alignItems: 'center' }}>
                        <Loader size="xs" />
                        <Loader size="sm" />
                        <Loader size="md" />
                        <Loader size="lg" />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
