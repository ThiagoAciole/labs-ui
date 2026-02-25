import { Radio, Flex, Heading } from '@labsui/core';
import { COLOR_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { useState } from 'react';

export default function RadioPage() {
    return (
        <Playground.Root
            componentName="Radio"
            defaultProps={{
                label: 'Sua Opção',
                description: 'Esta é uma breve descrição da escolha.',
                checked: true,
                disabled: false,
                color: 'primary'
            }}
            controls={{
                label: { type: 'text' },
                description: { type: 'text' },
                checked: { type: 'boolean' },
                disabled: { type: 'boolean' },
                color: { type: 'select', options: COLOR_OPTIONS }
            }}
        >
            <ShowcasePage
                title="Radio"
                description="O Radio é usado para selecionar uma única opção de uma lista. Oferece suporte a títulos e descrições detalhadas."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Radio {...props} name="playground-radio" />
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Cores</Heading>
                    <Flex gap="4" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Radio name="cor" label="Primary" color="primary" defaultChecked />
                        <Radio name="cor" label="Success" color="success" />
                        <Radio name="cor" label="Error" color="error" />
                        <Radio name="cor" label="Attention" color="attention" />
                        <Radio name="cor" label="Neutral" color="neutral" />
                    </Flex>
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Grupo de Opções</Heading>
                    <Flex direction="column" gap="4" style={{ marginTop: '1.5rem' }}>
                        <Radio name="ex" label="Plano Básico" description="Acesso limitado aos recursos básicos." defaultChecked />
                        <Radio name="ex" label="Plano Pro" description="Acesso total com suporte prioritário." />
                        <Radio name="ex" label="Plano Enterprise" description="Solução customizada para grandes empresas." disabled />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




