import { Slider, Heading, Text, Card, CardBody } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function SliderPage() {
    return (
        <Playground.Root
            componentName="Slider"
            defaultProps={{
                label: 'Volume',
                min: 0,
                max: 100,
                step: 1,
                disabled: false
            }}
            controls={{
                label: { type: 'text' },
                min: { type: 'number' },
                max: { type: 'number' },
                step: { type: 'number' },
                disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Slider"
                description="O Slider permite aos usuários selecionar um valor ou intervalo de valores a partir de uma faixa contínua ou discreta."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <Slider {...props} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Casos de Uso</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem', maxWidth: '400px' }}>
                        <Slider label="Brilho" defaultValue={80} />
                        <Slider label="Opacidade" min={0} max={1} step={0.1} defaultValue={0.5} />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
