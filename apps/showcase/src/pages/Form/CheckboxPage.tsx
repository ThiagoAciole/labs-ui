import { Checkbox, Heading } from '@labsui/core';
import { COLOR_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function CheckboxPage() {
    return (
        <Playground.Root
            componentName="Checkbox"
            defaultProps={{
                label: 'Aceitar termos e condições',
                disabled: false,
                checked: false,
                color: 'primary'
            }}
            controls={{
                label: { type: 'text' },
                disabled: { type: 'boolean' },
                checked: { type: 'boolean' },
                color: { type: 'select', options: COLOR_OPTIONS }
            }}
        >
            <ShowcasePage
                title="Checkbox"
                description="O Checkbox permite que o usuário selecione um ou mais itens de um conjunto, ou alterne entre dois estados mutuamente exclusivos."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Checkbox {...props} />
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Cores</Heading>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Checkbox label="Primary" color="primary" defaultChecked />
                        <Checkbox label="Success" color="success" defaultChecked />
                        <Checkbox label="Error" color="error" defaultChecked />
                        <Checkbox label="Attention" color="attention" defaultChecked />
                        <Checkbox label="Neutral" color="neutral" defaultChecked />
                    </div>
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Grupos de Seleção</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                        <Checkbox label="Notificações por E-mail" defaultChecked />
                        <Checkbox label="Notificações por SMS" />
                        <Checkbox label="Notificações Push (Desativado)" disabled />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




