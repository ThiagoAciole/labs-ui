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



const TextPage = () => {
    return (
        <ShowcasePage
            title="Text"
            description="Componente para textos base com variações de tamanho, peso e cor."
            code={`<Text size="md">Este é um texto base.</Text>`}
            noGrid
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}>
                <Card>
                    <CardBody title="Tamanhos">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Text size="xl">Texto Extra Large (xl)</Text>
                            <Text size="lg">Texto Large (lg)</Text>
                            <Text size="md">Texto Medium (md - Padrão)</Text>
                            <Text size="sm">Texto Small (sm)</Text>
                            <Text size="xs">Texto Extra Small (xs)</Text>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody title="Pesos e Cores">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Text weight="bold">Texto em Negrito</Text>
                            <Text weight="semibold">Texto Semibold</Text>
                            <Text weight="medium">Texto Medium</Text>
                            <Text color="primary">Cor Primária</Text>
                            <Text color="secondary">Cor Secundária</Text>
                            <Text color="muted">Cor Muted (Mudo)</Text>
                            <Text color="success">Cor Success</Text>
                            <Text color="danger">Cor Danger</Text>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </ShowcasePage>
    );
};

export default TextPage;
