import { Tag, Heading, Flex, Icon } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TagPage() {
    return (
        <Playground.Root
            componentName="Tag"
            defaultProps={{ appearance: 'soft', color: 'violet', size: 'md', children: 'Design System', closable: false }}
            controls={{
                appearance: { type: 'select', options: [ { value: 'soft', label: 'Soft' }, { value: 'outline', label: 'Outline' } ] },
                color: { type: 'select', options: [ { value: 'violet', label: 'Violet' }, { value: 'gray', label: 'Gray' }, { value: 'blue', label: 'Blue' }, { value: 'red', label: 'Red' } ] },
                size: { type: 'select', options: [ { value: 'xs', label: 'XS' }, { value: 'sm', label: 'Small' }, { value: 'md', label: 'Medium' }, { value: 'lg', label: 'Large' }, { value: 'xl', label: 'XL' } ] },
                closable: { type: 'boolean' },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage title="Tag" description="Tag orientada por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Tag {...props} onRemove={props.closable ? () => {} : undefined}>{props.children}</Tag>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos com Icones</Heading>
                    <Flex gap="4" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Tag leftIcon={<Icon name="spark" size={14} />}>Inovacao</Tag>
                        <Tag color="gray" leftIcon={<Icon name="rocket" size={14} />}>Lancamento</Tag>
                        <Tag closable onRemove={() => {}}>Removivel</Tag>
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

