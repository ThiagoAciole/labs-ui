import { IconButton, Icon, Heading, availableIcons } from '@labsui/core';
import { COLOR_OPTIONS, VARIANT_OPTIONS, SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function IconButtonPage() {
    return (
        <Playground.Root
            componentName="IconButton"
            defaultProps={{ icon: 'settings', variant: 'solid', color: 'primary', size: 'md', loading: false, disabled: false, 'aria-label': 'Configuracoes' }}
            controls={{
                icon: { type: 'select', searchable: true, options: availableIcons.map(icon => ({ value: icon, label: (<span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Icon name={icon as any} size={16} /><span>{icon}</span></span>), searchValue: icon })) },
                variant: { type: 'select', options: VARIANT_OPTIONS },
                color: { type: 'select', options: COLOR_OPTIONS },
                size: { type: 'select', options: SIZE_OPTIONS },
                loading: { type: 'boolean' }, disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage title="IconButton" description="IconButton orientado por TokenColor e variant." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <IconButton {...props} />} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variacoes de Icones</Heading>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <IconButton icon="plus" aria-label="Adicionar" variant="solid" color="primary" />
                        <IconButton icon="mail" aria-label="Email" variant="soft" color="primary" />
                        <IconButton icon="trash" aria-label="Excluir" variant="solid" color="error" />
                        <IconButton icon="search" aria-label="Pesquisar" variant="ghost" color="neutral" />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

