import { Avatar, Heading, Flex, Card, CardBody } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function AvatarPage() {
    return (
        <Playground.Root
            componentName="Avatar"
            defaultProps={{
                size: 'md',
                shape: 'circle',
                initials: 'TA',
                src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop',
                bordered: false
            }}
            controls={{
                size: {
                    type: 'select',
                    options: [
                        { value: 'xs', label: 'Extra Small' },
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                        { value: 'xl', label: 'Extra Large' },
                        { value: '2xl', label: '2XL' },
                    ]
                },
                shape: {
                    type: 'select',
                    options: [
                        { value: 'circle', label: 'Círculo' },
                        { value: 'square', label: 'Quadrado' },
                    ]
                },
                initials: { type: 'text' },
                src: { type: 'text' },
                bordered: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Avatar"
                description="O Avatar é usado para representar usuários ou marcas de forma visual, com suporte a imagens, iniciais ou ícones de fallback."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Avatar {...props} />
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Fallbacks e Iniciais</Heading>
                    <Flex gap="6" style={{ marginTop: '1.5rem', alignItems: 'center' }}>
                        <Avatar size="lg" initials="AZ" />
                        <Avatar size="lg" src="invalid-link" initials="FL" />
                        <Avatar size="lg" fallbackIcon="user" />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
