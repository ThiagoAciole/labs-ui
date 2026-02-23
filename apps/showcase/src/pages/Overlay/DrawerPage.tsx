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

export const DrawerPage = () => {
    const [openRight, setOpenRight] = useState(false);
    const [openLeft, setOpenLeft] = useState(false);

    return (
        <ShowcasePage
            title="Drawer"
            description="Painéis laterais que deslizam sobre o conteúdo principal."
            code={`<Drawer isOpen={open} onClose={() => setOpen(false)}>...</Drawer>`}
        >
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button onClick={() => setOpenRight(true)}>Abrir Drawer (Direita)</Button>
                <Button variant="outline" onClick={() => setOpenLeft(true)}>Abrir Drawer (Esquerda)</Button>

                <Drawer
                    isOpen={openRight}
                    onClose={() => setOpenRight(false)}
                    title="Detalhes do Pedido"
                    footer={
                        <>
                            <Button variant="ghost" onClick={() => setOpenRight(false)}>Fechar</Button>
                            <Button onClick={() => setOpenRight(false)}>Salvar</Button>
                        </>
                    }
                >
                    <Heading size={4} style={{ marginBottom: '1rem' }}>Configurações de Layout</Heading>
                    <Text color="muted">
                        Aqui você pode adicionar formulários, configurações ou informações adicionais
                        que não cabem na tela principal.
                    </Text>
                </Drawer>

                <Drawer
                    isOpen={openLeft}
                    onClose={() => setOpenLeft(false)}
                    placement="left"
                    title="Menu Principal"
                >
                    <Text>Conteúdo lateral esquerdo.</Text>
                </Drawer>
            </div>
        </ShowcasePage>
    );
};

export default DrawerPage;
