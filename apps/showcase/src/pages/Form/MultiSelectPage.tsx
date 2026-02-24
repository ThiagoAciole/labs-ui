import { MultiSelect, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { useState } from 'react';

export default function MultiSelectPage() {
    const [selected, setSelected] = useState<string[]>(['react']);
    const options = [
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte' },
        { label: 'Next.js', value: 'next' },
        { label: 'Remix', value: 'remix' }
    ];

    return (
        <Playground.Root
            componentName="MultiSelect"
            defaultProps={{
                placeholder: 'Selecione as tecnologias...',
                disabled: false,
                maxTags: 5
            }}
            controls={{
                placeholder: { type: 'text' },
                disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="MultiSelect"
                description="O MultiSelect permite selecionar múltiplas opções de uma lista, visualizando-as como tags removíveis."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '400px', paddingBottom: '12rem' }}>
                        <MultiSelect
                            {...props}
                            options={options}
                            value={selected}
                            onChange={setSelected}
                        />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Funcionalidades</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Tags removíveis com interações de hover suaves.</li>
                            <li>Menu suspenso com posicionamento dinâmico.</li>
                            <li>Feedback tátil ao selecionar e remover itens.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
