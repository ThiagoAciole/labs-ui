import { Switch, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function SwitchPage() {
    return (
        <Playground.Root
            componentName="Switch"
            defaultProps={{
                label: 'Modo Escuro',
                checked: true,
                disabled: false,
                size: 'md'
            }}
            controls={{
                label: { type: 'text' },
                checked: { type: 'boolean' },
                disabled: { type: 'boolean' },
                size: {
                    type: 'select',
                    options: [
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Switch"
                description="O Switch é um componente usado para alternar entre dois estados, como ligado/desligado ou sim/não."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Switch {...props} />
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Cenários de Uso</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem', maxWidth: '300px' }}>
                        <Switch label="Wi-Fi" defaultChecked />
                        <Switch label="Bluetooth" />
                        <Switch label="Modo Avião" disabled />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




