import { Button, Icon, availableIcons } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { Heading } from '@labsui/core';

export default function ButtonPage() {
    return (
        <Playground.Root
            componentName="Button"
            defaultProps={{ appearance: 'solid', color: 'violet', size: 'md', children: 'Botao Labs', loading: false, disabled: false, full: false }}
            controls={{
                appearance: { type: 'select', options: [ { value: 'solid', label: 'Solid' }, { value: 'soft', label: 'Soft' }, { value: 'outline', label: 'Outline' }, { value: 'ghost', label: 'Ghost' } ] },
                color: { type: 'select', options: [ { value: 'violet', label: 'Violet' }, { value: 'blue', label: 'Blue' }, { value: 'green', label: 'Green' }, { value: 'yellow', label: 'Yellow' }, { value: 'red', label: 'Red' }, { value: 'gray', label: 'Gray' } ] },
                size: { type: 'select', options: [ { value: 'xs', label: 'XS' }, { value: 'sm', label: 'Small' }, { value: 'md', label: 'Medium' }, { value: 'lg', label: 'Large' }, { value: 'xl', label: 'XL' } ] },
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
            <ShowcasePage title="Button" description="Botao orientado por TokenColor e appearance." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Button {...props}>{props.children}</Button>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos</Heading>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Button appearance="solid" color="violet" icon="plus">Novo Item</Button>
                        <Button appearance="soft" color="blue" icon="arrow-right">Continuar</Button>
                        <Button appearance="outline" color="gray">Cancelar</Button>
                        <Button appearance="solid" color="red">Excluir</Button>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

