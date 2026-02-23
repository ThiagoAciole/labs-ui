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

export const DropdownPage = () => {
    const items = [
        { label: 'Perfil', icon: <Icon name="user" size={14} /> },
        { label: 'Configurações', icon: <Icon name="settings" size={14} /> },
        { separator: true },
        { label: 'Sair', icon: <Icon name="close" size={14} />, danger: true },
    ];
    return (
        <ShowcasePage title="Dropdown" description="Menu suspenso de ações." code={`<DropdownMenu trigger={<Button>Ações</Button>} items={items} />`}>
            <DropdownMenu trigger={<Button variant="outline">Menu de Ações</Button>} items={items} />
        </ShowcasePage>
    );
};

export default DropdownPage;
