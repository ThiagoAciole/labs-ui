import { Select, Heading, Card, CardBody } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { useState } from 'react';

export default function SelectPage() {
    const options = [
        { value: 'react', label: 'React.js' },
        { value: 'vite', label: 'Vite' },
        { value: 'labs', label: 'LabsUI' },
        { value: 'css', label: 'Vanilla CSS' },
        { value: 'disabled', label: 'Desabilitado', disabled: true },
    ];

    return (
        <Playground.Root
            componentName="Select"
            defaultProps={{
                label: 'Tecnologia',
                placeholder: 'Selecione uma techs...',
                size: 'md',
                full: true,
                disabled: false,
                error: '',
                hint: 'Escolha sua tecnologia favorita.'
            }}
            controls={{
                label: { type: 'text' },
                placeholder: { type: 'text' },
                error: { type: 'text' },
                hint: { type: 'text' },
                size: {
                    type: 'select',
                    options: [
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                    ]
                },
                full: { type: 'boolean' },
                disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Select"
                description="O Select é um menu de seleção suspenso customizado com suporte a estados, placeholders e design tokens."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <Select {...props} options={options} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variantes de Tamanho</Heading>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                        <Select label="Pequeno (sm)" size="sm" options={options} defaultValue="react" />
                        <Select label="Médio (md)" size="md" options={options} defaultValue="vite" />
                        <Select label="Grande (lg)" size="lg" options={options} defaultValue="labs" />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
