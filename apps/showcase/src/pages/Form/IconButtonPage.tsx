import { IconButton, Icon, Heading, availableIcons } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function IconButtonPage() {
    return (
        <Playground.Root
            componentName="IconButton"
            defaultProps={{
                icon: 'settings',
                variant: 'primary',
                size: 'md',
                loading: false,
                disabled: false,
                'aria-label': 'Configurações'
            }}
            controls={{
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
                loading: { type: 'boolean' },
                disabled: { type: 'boolean' },
            }}
        >
            <ShowcasePage
                title="IconButton"
                description="O IconButton é uma variante focada em ícones, ideal para ações compactas em toolbars e grids."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <IconButton {...props} />
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variações de Ícones</Heading>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <IconButton icon="plus" aria-label="Adicionar" variant="primary" />
                        <IconButton icon="mail" aria-label="Email" variant="secondary" />
                        <IconButton icon="trash" aria-label="Excluir" variant="danger" />
                        <IconButton icon="search" aria-label="Pesquisar" variant="ghost" />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
