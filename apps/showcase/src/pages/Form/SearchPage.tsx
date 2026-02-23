import { useState } from 'react';
import { 
    Icon, Button, IconButton, Badge, Input, TextArea, Search, Select, Checkbox, 
    Radio, Switch, Slider, DatePicker, FileUpload, Avatar, Tag, Table, Thead, 
    Tbody, Tr, Th, Td, Timeline, TimelineItem, Accordion, AccordionItem, EmptyState, 
    Image, Card, CardBody, CardHeader, CardFooter, Link, Breadcrumb, Tabs, 
    Pagination, DropdownMenu, TopBar, ToastProvider, useToast, Loader, Progress, 
    Skeleton, Modal, Drawer, Tooltip, Container, Flex, Grid, Spacer, Divider, 
    PageHeader, List, ListItem, MultiSelect, Text, Heading, IconName 
} from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';



const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (value: string) => {
        setSearchValue(value);
        if (value) {
            setLoading(true);
            // Simular busca assíncrona
            setTimeout(() => setLoading(false), 800);
        }
    };

    return (
        <ShowcasePage
            title="Search"
            description="Input especializado para buscas com ícone integrado e estado de carregamento."
            code={`<Search \n  placeholder="Buscar..." \n  onSearch={(val) => console.log(val)} \n  loading={loading} \n/>`}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                <Card>
                    <CardBody>
                        <Heading size={5} style={{ marginBottom: '1rem' }}>Busca Padrão</Heading>
                        <Search
                            placeholder="Pesquisar componentes..."
                            fullWidth
                            onSearch={handleSearch}
                            loading={loading}
                        />
                        {searchValue && (
                            <Text size="sm" color="muted" style={{ marginTop: '0.5rem', display: 'block' }}>
                                Buscando por: <strong>{searchValue}</strong>
                            </Text>
                        )}
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Heading size={5} style={{ marginBottom: '1rem' }}>Variantes de Tamanho</Heading>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Search size="sm" placeholder="Search sm" />
                            <Search size="md" placeholder="Search md" />
                            <Search size="lg" placeholder="Search lg" />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </ShowcasePage>
    );
};

export default SearchPage;
