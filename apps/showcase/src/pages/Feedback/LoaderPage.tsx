import { Loader, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function LoaderPage() {
    return (
        <Playground.Root
            componentName="Loader"
            defaultProps={{ color: 'primary', size: 'md' }}
            controls={{
                color: { type: 'select', options: [ { value: 'primary', label: 'Primary' }, { value: 'success', label: 'Success' }, { value: 'attention', label: 'Attention' }, { value: 'error', label: 'Error' }, { value: 'neutral', label: 'Neutral' } ] },
                size: { type: 'select', options: [ { value: 'xs', label: 'XS' }, { value: 'sm', label: 'Small' }, { value: 'md', label: 'Medium' }, { value: 'lg', label: 'Large' } ] }
            }}
        >
            <ShowcasePage title="Loader" description="Loader orientado por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Loader {...props} />} />
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

