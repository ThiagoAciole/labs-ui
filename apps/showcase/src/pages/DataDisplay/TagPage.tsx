import { Tag, Heading, Flex, Icon } from '@labsui/core';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TagPage() {
    return (
        <Playground.Root
            componentName="Tag"
            defaultProps={{ variant: 'soft', color: 'primary', size: 'md', children: 'Design System', closable: false }}
            controls={{
                variant: { type: 'select', options: [{ value: 'soft', label: 'Soft' }, { value: 'outline', label: 'Outline' }] },
                color: { type: 'select', options: COLOR_OPTIONS },
                size: { type: 'select', options: SIZE_OPTIONS },
                closable: { type: 'boolean' },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage title="Tag" description="Tag orientada por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Tag {...props} onRemove={props.closable ? () => { } : undefined}>{props.children}</Tag>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos com Icones</Heading>
                    <Flex gap="4" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Tag leftIcon="spark">Inovacao</Tag>
                        <Tag color="neutral" leftIcon="rocket">Lancamento</Tag>
                        <Tag closable onRemove={() => { }}>Removivel</Tag>
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

