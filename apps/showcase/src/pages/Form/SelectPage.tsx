import { Select, Heading, Card, CardBody, Flex } from '@labsui/core';
import { SIZE_OPTIONS } from '../../config/categories/commonOptions';
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
                supportText: 'Escolha sua tecnologia favorita.'
            }}
            controls={{
                label: { type: 'text' },
                placeholder: { type: 'text' },
                error: { type: 'text' },
                supportText: { type: 'text' },
                size: {
                    type: 'select',
                    options: SIZE_OPTIONS
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

                <div style={{ marginTop: '4rem', }}>
                    <Heading size="m">Variantes de Tamanho</Heading>
                    <Flex direction="row" style={{ gap: '1rem', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Select full label="Pequeno (sm)" size="sm" options={options} defaultValue="react" style={{ width: '100%', }} />
                        <Select full label="Médio (md)" size="md" options={options} defaultValue="vite" style={{ width: '100%' }} />
                        <Select full label="Grande (lg)" size="lg" options={options} defaultValue="labs" style={{ width: '100%' }} />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




