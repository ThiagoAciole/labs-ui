import { Badge, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function BadgePage() {
    return (
        <Playground.Root
            componentName="Badge"
            defaultProps={{ appearance: 'soft', color: 'violet', size: 'md', children: 'Novo' }}
            controls={{
                appearance: { type: 'select', options: [ { value: 'soft', label: 'Soft' }, { value: 'outline', label: 'Outline' } ] },
                color: { type: 'select', options: [ { value: 'violet', label: 'Violet' }, { value: 'green', label: 'Green' }, { value: 'yellow', label: 'Yellow' }, { value: 'red', label: 'Red' }, { value: 'blue', label: 'Blue' }, { value: 'gray', label: 'Gray' } ] },
                size: { type: 'select', options: [ { value: 'xs', label: 'XS' }, { value: 'sm', label: 'Small' }, { value: 'md', label: 'Medium' }, { value: 'lg', label: 'Large' }, { value: 'xl', label: 'XL' } ] },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage title="Badge" description="Badge orientado por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Badge {...props}>{props.children}</Badge>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Cores</Heading>
                    <Flex gap="4" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Badge color="green">Disponivel</Badge>
                        <Badge color="red">Ocupado</Badge>
                        <Badge color="yellow">Ausente</Badge>
                        <Badge color="violet">Notificacao</Badge>
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

