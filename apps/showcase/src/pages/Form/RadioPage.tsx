import { Radio, Flex, Heading } from '@labsui/core';
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
                disabled: false
            }}
            controls={{
                label: { type: 'text' },
                description: { type: 'text' },
                checked: { type: 'boolean' },
                disabled: { type: 'boolean' }
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




