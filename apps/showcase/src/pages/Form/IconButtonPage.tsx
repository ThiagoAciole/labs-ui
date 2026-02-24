import { IconButton, Icon, Heading, availableIcons } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function IconButtonPage() {
    return (
        <Playground.Root
            componentName="IconButton"
            defaultProps={{ icon: 'settings', appearance: 'solid', color: 'violet', size: 'md', loading: false, disabled: false, 'aria-label': 'Configuracoes' }}
            controls={{
                icon: { type: 'select', searchable: true, options: availableIcons.map(icon => ({ value: icon, label: (<span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Icon name={icon as any} size={16} /><span>{icon}</span></span>), searchValue: icon })) },
                appearance: { type: 'select', options: [ { value: 'solid', label: 'Solid' }, { value: 'soft', label: 'Soft' }, { value: 'outline', label: 'Outline' }, { value: 'ghost', label: 'Ghost' } ] },
                color: { type: 'select', options: [ { value: 'violet', label: 'Violet' }, { value: 'blue', label: 'Blue' }, { value: 'green', label: 'Green' }, { value: 'yellow', label: 'Yellow' }, { value: 'red', label: 'Red' }, { value: 'gray', label: 'Gray' } ] },
                size: { type: 'select', options: [ { value: 'sm', label: 'Small' }, { value: 'md', label: 'Medium' }, { value: 'lg', label: 'Large' } ] },
                loading: { type: 'boolean' }, disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage title="IconButton" description="IconButton orientado por TokenColor e appearance." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <IconButton {...props} />} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variacoes de Icones</Heading>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <IconButton icon="plus" aria-label="Adicionar" appearance="solid" color="violet" />
                        <IconButton icon="mail" aria-label="Email" appearance="soft" color="blue" />
                        <IconButton icon="trash" aria-label="Excluir" appearance="solid" color="red" />
                        <IconButton icon="search" aria-label="Pesquisar" appearance="ghost" color="gray" />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

