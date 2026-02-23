import { useState } from 'react';
import {
    Icon, Input, Card, Text, availableIcons
} from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';

const IconsPage = () => {
    const [search, setSearch] = useState('');

    const filteredIcons = availableIcons.filter(name =>
        name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ShowcasePage
            title="Ícones"
            description="Biblioteca de ícones modularizada e consistente."
            code={`<Icon name="rocket" size={24} color="var(--labs-primary)" />`}
            noGrid
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                <Input
                    placeholder="Pesquisar ícones..."
                    prefix={<Icon name="search" size={18} />}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ maxWidth: '400px' }}
                />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '1rem'
                }}>
                    {filteredIcons.map(name => (
                        <Card key={name} variant="outlined" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.5rem',
                            gap: '0.75rem',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}>
                            <Icon name={name} size={32} />
                            <Text size="xs" color="secondary" weight="medium" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{name}</Text>
                        </Card>
                    ))}
                </div>

                {filteredIcons.length === 0 && (
                    <div style={{ padding: '3rem', textAlign: 'center' }}>
                        <Text color="muted">Nenhum ícone encontrado para "{search}"</Text>
                    </div>
                )}
            </div>
        </ShowcasePage>
    );
};

export default IconsPage;
