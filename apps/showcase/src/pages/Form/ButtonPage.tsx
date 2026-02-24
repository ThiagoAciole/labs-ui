import { Button, Icon, availableIcons } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ButtonPage() {
    return (
        <Playground.Root
            componentName="Button"
            defaultProps={{
                variant: 'primary',
                size: 'md',
                children: 'Botão Labs',
                loading: false,
                disabled: false,
                full: false
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'primary', label: 'Primary' },
                        { value: 'secondary', label: 'Secondary' },
                        { value: 'outline', label: 'Outline' },
                        { value: 'ghost', label: 'Ghost' },
                        { value: 'danger', label: 'Danger' },
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
                icon: {
                    type: 'select',
                    searchable: true,
                    options: availableIcons.map(icon => ({
                        value: icon,
                        label: (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <Icon name={icon as any} size={16} />
                                <span>{icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
                            </span>
                        ),
                        searchValue: icon
                    }))
                },
                loading: { type: 'boolean' },
                disabled: { type: 'boolean' },
                full: { type: 'boolean' },
                children: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Button"
                description="O botão é um componente de interação primário, agora refatorado para suportar micro-interações e design tokens modernos."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Button {...props}>{props.children}</Button>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos</Heading>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Button variant="primary" icon="plus">Novo Item</Button>
                        <Button variant="secondary" icon="arrow-right">Continuar</Button>
                        <Button variant="outline">Cancelar</Button>
                        <Button variant="danger">Excluir</Button>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

// Import apenas para o heading funcionar no exemplo
import { Heading } from '@labsui/core';
