import { Tag, Heading, Flex, Icon } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TagPage() {
    return (
        <Playground.Root
            componentName="Tag"
            defaultProps={{
                variant: 'primary',
                size: 'md',
                children: 'Design System',
                closable: false
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'primary', label: 'Primary' },
                        { value: 'secondary', label: 'Secondary' },
                        { value: 'outline', label: 'Outline' },
                        { value: 'ghost', label: 'Ghost' },
                    ]
                },
                size: {
                    type: 'select',
                    options: [
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                    ]
                },
                closable: { type: 'boolean' },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Tag"
                description="As Tags são usadas para rotular, categorizar ou organizar itens usando palavras-chave."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Tag {...props} onRemove={props.closable ? () => { } : undefined}>
                        {props.children}
                    </Tag>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos com Ícones</Heading>
                    <Flex gap="4" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Tag leftIcon={<Icon name="spark" size={14} />}>Inovação</Tag>
                        <Tag variant="secondary" leftIcon={<Icon name="rocket" size={14} />}>Lançamento</Tag>
                        <Tag closable onRemove={() => { }}>Removível</Tag>
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
