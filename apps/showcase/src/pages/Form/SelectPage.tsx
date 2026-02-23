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

export const SelectPage = () => {
    const [val1, setVal1] = useState('1');


    const options = [
        { value: '1', label: 'Opção 1' },
        { value: '2', label: 'Opção 2' },
        { value: '3', label: 'Opção 3' },
        { value: '4', label: 'Opção Desabilitada', disabled: true },
    ];

    const techOptions = [
        { value: 'react', label: 'React.js' },
        { value: 'vite', label: 'Vite' },
        { value: 'labs', label: 'LabsUI' },
        { value: 'css', label: 'Vanilla CSS' },
    ];

    return (
        <ShowcasePage
            title="Select"
            description="Menu de seleção customizado com design premium e animações."
            code={`<Select \n  label="Tecnologia" \n  options={options} \n  onChange={(val) => setVal(val)} \n/>`}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                <Card>
                    <CardBody>
                        <Heading size={5} style={{ marginBottom: '1.5rem' }}>Exemplo Básico</Heading>
                        <Select
                            label="Selecione um item"
                            options={options}
                            value={val1}
                            onChange={setVal1}
                            fullWidth
                        />
                        <div style={{ marginTop: '1rem', color: 'var(--labs-text2)', fontSize: '14px' }}>
                            Valor selecionado: <strong>{val1}</strong>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Heading size={5} style={{ marginBottom: '1.5rem' }}>Variantes e Estados</Heading>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <Select
                                label="Tamanho Pequeno"
                                size="sm"
                                placeholder="Selecione..."
                                options={techOptions}
                            />
                            <Select
                                label="Com Erro"
                                error="Este campo é obrigatório"
                                options={techOptions}
                            />
                            <Select
                                label="Desabilitado"
                                disabled
                                options={techOptions}
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </ShowcasePage>
    );
};

export default SelectPage;
