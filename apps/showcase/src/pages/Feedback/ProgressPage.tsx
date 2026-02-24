import { Progress, Heading, Flex, Button } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { useState } from 'react';

export default function ProgressPage() {
    return (
        <Playground.Root
            componentName="Progress"
            defaultProps={{
                value: 65,
                variant: 'primary',
                size: 'md',
                animated: true,
                showValue: true,
                label: 'Status do Processamento'
            }}
            controls={{
                value: { type: 'number' },
                variant: {
                    type: 'select',
                    options: [
                        { value: 'primary', label: 'Primary' },
                        { value: 'success', label: 'Success' },
                        { value: 'warning', label: 'Warning' },
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
                animated: { type: 'boolean' },
                showValue: { type: 'boolean' },
                label: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Progress"
                description="O componente Progress visualiza o progresso de uma tarefa ou processo, fornecendo feedback em tempo real para o usuário."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                        <Progress {...props} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variantes de Estado</Heading>
                    <Flex direction="column" gap="4" style={{ marginTop: '1.5rem', maxWidth: '500px' }}>
                        <Progress value={100} variant="success" label="Completo" showValue />
                        <Progress value={50} variant="warning" label="Atenção" showValue />
                        <Progress value={20} variant="danger" label="Erro Crítico" showValue />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
