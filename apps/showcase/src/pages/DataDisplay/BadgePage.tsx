import { Badge, Heading, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function BadgePage() {
    return (
        <Playground.Root
            componentName="Badge"
            defaultProps={{
                variant: 'primary',
                size: 'md',
                children: 'Novo'
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'primary', label: 'Primary' },
                        { value: 'success', label: 'Success' },
                        { value: 'warning', label: 'Warning' },
                        { value: 'danger', label: 'Danger' },
                        { value: 'info', label: 'Info' },
                        { value: 'outline', label: 'Outline' },
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
                children: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Badge"
                description="O Badge é um pequeno componente visual usado para destacar status, contagens ou etiquetas curtas."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Badge {...props}>{props.children}</Badge>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variantes de Status</Heading>
                    <Flex gap="4" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Badge variant="success">Disponível</Badge>
                        <Badge variant="danger">Ocupado</Badge>
                        <Badge variant="warning">Ausente</Badge>
                        <Badge variant="primary">Notificação</Badge>
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
