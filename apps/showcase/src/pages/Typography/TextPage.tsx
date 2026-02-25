import { Text, Heading, Card, CardBody } from '@labsui/core';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TextPage() {
    return (
        <Playground.Root
            componentName="Text"
            defaultProps={{
                size: 'md',
                weight: 'regular',
                color: 'neutral',
                children: 'A experiência do usuário é o coração do design moderno, unindo estética e funcionalidade.'
            }}
            controls={{
                size: {
                    type: 'select',
                    options: SIZE_OPTIONS
                },
                weight: {
                    type: 'select',
                    options: [
                        { value: 'light', label: 'Light' },
                        { value: 'regular', label: 'Regular' },
                        { value: 'medium', label: 'Medium' },
                        { value: 'semibold', label: 'Semibold' },
                        { value: 'bold', label: 'Bold' },
                    ]
                },
                color: {
                    type: 'select',
                    options: COLOR_OPTIONS
                },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Text"
                description="O componente Text é utilizado para corpos de texto, parágrafos e legendas, garantindo legibilidade e controle de hierarquia."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        <Text {...props}>{props.children}</Text>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Pesos e Cores</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                        <Text weight="bold">Texto em Negrito para ênfase máxima.</Text>
                        <Text color="primary">Texto com cor de marca para ações secundárias.</Text>
                        <Text color="neutral">Texto suave para informações menos importantes ou sugestões.</Text>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




