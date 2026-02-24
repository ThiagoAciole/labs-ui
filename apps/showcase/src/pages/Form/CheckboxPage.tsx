import { Checkbox, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function CheckboxPage() {
    return (
        <Playground.Root
            componentName="Checkbox"
            defaultProps={{
                label: 'Aceitar termos e condições',
                disabled: false,
                checked: false
            }}
            controls={{
                label: { type: 'text' },
                disabled: { type: 'boolean' },
                checked: { type: 'boolean' }
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




