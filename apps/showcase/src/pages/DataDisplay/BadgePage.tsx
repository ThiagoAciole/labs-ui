import { Badge, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../config/categories/commonOptions';

export default function BadgePage() {
    return (
        <Playground.Root
            componentName="Badge"
            defaultProps={{ variant: 'soft', color: 'primary', size: 'md', children: 'Novo' }}
            controls={{
                variant: { type: 'select', options: [{ value: 'soft', label: 'Soft' }, { value: 'outline', label: 'Outline' }] },
                color: { type: 'select', options: COLOR_OPTIONS },
                size: { type: 'select', options: SIZE_OPTIONS },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage title="Badge" description="Badge orientado por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Badge {...props}>{props.children}</Badge>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Cores</Heading>
                    <Flex gap="4" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Badge color="primary">Disponivel</Badge>
                        <Badge color="error">Ocupado</Badge>
                        <Badge color="attention">Ausente</Badge>
                        <Badge color="success">Sucesso</Badge>
                        <Badge color="neutral">Neutral</Badge>
                        <Badge color="primary" variant="outline">Disponivel</Badge>
                        <Badge color="error" variant="outline">Ocupado</Badge>
                        <Badge color="attention" variant="outline">Ausente</Badge>
                        <Badge color="success" variant="outline">Sucesso</Badge>
                        <Badge color="neutral" variant="outline">Neutral</Badge>
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

