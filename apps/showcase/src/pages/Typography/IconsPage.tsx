import { useState } from 'react';
import { Icon, Input, Card, Text, availableIcons, useToast } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import { COLOR_OPTIONS } from '../../config/categories/colorOptions';

const IconsPage = () => {
    const [search, setSearch] = useState('');
    const [hoveredGridIcon, setHoveredGridIcon] = useState<string | null>(null);
    const [previewHovered, setPreviewHovered] = useState(false);
    const { toast } = useToast();

    const filteredIcons = availableIcons.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
    );

    const handleCopy = (name: string) => {
        navigator.clipboard.writeText(name);
        toast({
            title: `Icone ${name} Copiado!`,
            color: 'success'
        });
    };

    return (
        <Playground.Root
            componentName="Icon"
            defaultProps={{
                name: 'rocket',
                size: 32,
                color: 'primary'
            }}
            controls={{
                name: {
                    type: 'select',
                    searchable: true,
                    options: availableIcons.map((icon) => ({
                        value: icon,
                        label: (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <Icon name={icon as any} size={14} />
                                <span>{icon}</span>
                            </span>
                        ),
                        searchValue: icon
                    }))
                },
                size: { type: 'number' },
                color: {
                    type: 'select',
                    options: COLOR_OPTIONS
                }
            }}
        >
            <ShowcasePage
                title="Icones"
                description="Biblioteca de icones modularizada e consistente."
                aside={<Playground.Controls />}
                noGrid
            >
                <Playground.Preview render={(props: any) => (
                    <Card
                        variant="outlined"
                        onClick={() => handleCopy(props.name)}
                        onMouseEnter={() => setPreviewHovered(true)}
                        onMouseLeave={() => setPreviewHovered(false)}
                        style={{
                            width: '220px',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.5rem',
                            gap: '0.75rem',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                            transform: previewHovered ? 'translateY(-4px)' : 'translateY(0)',
                            boxShadow: previewHovered ? '0 10px 24px rgba(0, 0, 0, 0.12)' : 'none',
                            borderColor: previewHovered ? 'var(--color--violet)' : undefined
                        }}
                    >
                        <Icon name={props.name} size={props.size} color={props.color} />
                        <Text size="xs" weight="medium">{props.name}</Text>
                    </Card>
                )} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', marginTop: '2rem' }}>
                    <Input
                        placeholder="Pesquisar icones..."
                        prefix={<Icon name="search" size={18} />}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ maxWidth: '400px' }}
                    />

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                            gap: '1rem'
                        }}
                    >
                        {filteredIcons.map((name) => (
                            <Card
                                key={name}
                                variant="outlined"
                                onClick={() => handleCopy(name)}
                                onMouseEnter={() => setHoveredGridIcon(name)}
                                onMouseLeave={() => setHoveredGridIcon(null)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1.5rem',
                                    gap: '0.75rem',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer',
                                    transform: hoveredGridIcon === name ? 'translateY(-4px)' : 'translateY(0)',
                                    boxShadow: hoveredGridIcon === name ? '0 10px 24px rgba(0, 0, 0, 0.12)' : 'none',
                                    borderColor: hoveredGridIcon === name ? 'var(--color--violet)' : undefined
                                }}
                            >
                                <Icon name={name} size={32} />
                                <Text
                                    size="xs"
                                    weight="medium"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        maxWidth: '100%'
                                    }}
                                >
                                    {name}
                                </Text>
                            </Card>
                        ))}
                    </div>

                    {filteredIcons.length === 0 && (
                        <div style={{ padding: '3rem', textAlign: 'center' }}>
                            <Text >Nenhum icone encontrado para "{search}"</Text>
                        </div>
                    )}
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
};

export default IconsPage;




