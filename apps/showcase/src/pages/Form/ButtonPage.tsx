import { Button, Icon, availableIcons } from '@labsui/core';
import { COLOR_OPTIONS, VARIANT_OPTIONS, SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { Heading } from '@labsui/core';

export default function ButtonPage() {
    return (
        <Playground.Root
            componentName="Button"
            defaultProps={{ variant: 'solid', color: 'primary', size: 'md', children: 'Botao Labs', loading: false, disabled: false, full: false }}
            controls={{
                variant: { type: 'select', options: VARIANT_OPTIONS },
                color: { type: 'select', options: COLOR_OPTIONS },
                size: { type: 'select', options: SIZE_OPTIONS },
                icon: {
                    type: 'select', searchable: true,
                    options: availableIcons.map(icon => ({
                        value: icon,
                        label: (<span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Icon name={icon as any} size={16} /><span>{icon}</span></span>),
                        searchValue: icon
                    }))
                },
                loading: { type: 'boolean' }, disabled: { type: 'boolean' }, full: { type: 'boolean' }, children: { type: 'text' }
            }}
        >
            <ShowcasePage title="Button" description="Botao orientado por TokenColor e variant." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Button {...props}>{props.children}</Button>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos</Heading>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Button variant="solid" color="primary" icon="plus">Novo Item</Button>
                        <Button variant="soft" color="primary" icon="arrow-right">Continuar</Button>
                        <Button variant="outline" color="neutral">Cancelar</Button>
                        <Button variant="solid" color="error">Excluir</Button>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

