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



export default function PageHeaderPage() {
    return (
        <ShowcasePage
            title="PageHeader"
            description="Componente de cabeçalho estrutural usado no topo de telas da aplicação."
            code={`<PageHeader title="Meus Pedidos" />`}
        >
            <div style={{ width: '100%', background: 'var(--labs-surface2)', padding: '2rem' }}>
                <PageHeader
                    title="Detalhes do Pedido"
                    description="O pedido #400 foi recebido e está em processamento."

                    action={<Button variant="primary">Processar Pedido</Button>}
                />
            </div>
        </ShowcasePage>
    );
}
