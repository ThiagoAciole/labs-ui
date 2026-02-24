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

export const TablePage = () => {
    const data = [
        { id: 1, name: 'Thiago Lopes', role: 'Lead Design', status: 'Online' },
        { id: 2, name: 'Lucas Silva', role: 'Frontend Dev', status: 'Offline' },
        { id: 3, name: 'Ana Souza', role: 'Product Manager', status: 'Online' },
        { id: 4, name: 'Marina Fontes', role: 'UX Researcher', status: 'Away' },
    ];

    return (
        <ShowcasePage
            title="Table"
            description="Componente para exibição de dados tabulares estruturados."
            code={`<Table striped hover>\n  <Thead>...</Thead>\n  <Tbody>...</Tbody>\n</Table>`}
            noGrid
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                <Table hover>
                    <Thead>
                        <Tr>
                            <Th>Usuário</Th>
                            <Th>Cargo</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map(item => (
                            <Tr key={item.id}>
                                <Td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <Avatar size="sm" initials={item.name} />
                                        {item.name}
                                    </div>
                                </Td>
                                <Td>{item.role}</Td>
                                <Td>{item.status}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                <Heading size="sm">Variante Listrada (Striped)</Heading>
                <Table striped hover compact>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Nome</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map(item => (
                            <Tr key={item.id}>
                                <Td>#{item.id}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.status}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </ShowcasePage>
    );
};

export default TablePage;
