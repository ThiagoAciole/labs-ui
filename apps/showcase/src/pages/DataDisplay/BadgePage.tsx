import { Badge, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { COLOR_OPTIONS } from '../../config/categories/colorOptions';

export default function BadgePage() {
    return (
        <Playground.Root
            componentName="Badge"
            defaultProps={{ appearance: 'soft', color: 'primary', size: 'md', children: 'Novo' }}
            controls={{
                appearance: { type: 'select', options: [{ value: 'soft', label: 'Soft' }, { value: 'outline', label: 'Outline' }] },
                color: { type: 'select', options: COLOR_OPTIONS },
                size: { type: 'select', options: [{ value: 'xs', label: 'XS' }, { value: 'sm', label: 'Small' }, { value: 'md', label: 'Medium' }, { value: 'lg', label: 'Large' }, { value: 'xl', label: 'XL' }] },
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
                        <Badge color="primary" appearance="outline">Disponivel</Badge>
                        <Badge color="error" appearance="outline">Ocupado</Badge>
                        <Badge color="attention" appearance="outline">Ausente</Badge>
                        <Badge color="success" appearance="outline">Sucesso</Badge>
                        <Badge color="neutral" appearance="outline">Neutral</Badge>
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

