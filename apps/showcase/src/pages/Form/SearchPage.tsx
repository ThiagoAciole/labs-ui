import { Search, Heading, Text, Card, CardBody } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { useState } from 'react';

export default function SearchPage() {
    return (
        <Playground.Root
            componentName="Search"
            defaultProps={{
                placeholder: 'Pesquisar componentes...',
                size: 'md',
                full: true,
                loading: false,
                disabled: false
            }}
            controls={{
                placeholder: { type: 'text' },
                size: {
                    type: 'select',
                    options: [
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                    ]
                },
                loading: { type: 'boolean' },
                full: { type: 'boolean' },
                disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Search"
                description="Input especializado para buscas com ícone integrado e estado de carregamento automático."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                        <Search {...props} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variações de Tamanho</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', maxWidth: '400px' }}>
                        <Search size="sm" placeholder="Buscar pequeno (sm)..." />
                        <Search size="md" placeholder="Buscar padrão (md)..." />
                        <Search size="lg" placeholder="Buscar grande (lg)..." />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




