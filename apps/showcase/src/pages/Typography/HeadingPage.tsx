import { Heading, Card, CardBody } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function HeadingPage() {
    return (
        <Playground.Root
            componentName="Heading"
            defaultProps={{
                size: 'xl',
                children: 'Design System Premium',
                align: 'left',
                color: 'neutral'
            }}
            controls={{
                size: {
                    type: 'select',
                    options: [
                        { value: 'xl', label: 'xl' },
                        { value: 'lg', label: 'lg' },
                        { value: 'm', label: 'm' },
                        { value: 's', label: 's' },
                        { value: 'sm', label: 'sm' },
                        { value: 'xs', label: 'xs' },
                    ]
                },
                align: {
                    type: 'select',
                    options: [
                        { value: 'left', label: 'Left' },
                        { value: 'center', label: 'Center' },
                        { value: 'right', label: 'Right' },
                    ]
                },
                color: {
                    type: 'select',
                    options: [
                        { value: 'neutral', label: 'Neutral' },
                        { value: 'primary', label: 'Primary' },
                        { value: 'success', label: 'Success' },
                        { value: 'error', label: 'Error' },
                        { value: 'attention', label: 'Attention' },
                    ]
                },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Heading"
                description="O componente Heading fornece estilos tipográficos consistentes para títulos, variando do nível 1 ao 6."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%' }}>
                        <Heading {...props}>{props.children}</Heading>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="s">Escala Tipográfica</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                        <Heading size="xl">Impactante e Imersivo</Heading>
                        <Heading size="lg">Estrutura e Clareza</Heading>
                        <Heading size="m">Divisões de Conteúdo</Heading>
                        <Heading size="s">Sub-seções Específicas</Heading>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




