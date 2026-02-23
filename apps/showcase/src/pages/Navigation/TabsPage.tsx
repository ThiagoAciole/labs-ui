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

export const TabsPage = () => {
    const tabs = [
        { value: '1', label: 'Aba 1', content: 'Conteúdo da primeira aba.' },
        { value: '2', label: 'Aba 2', content: 'Conteúdo da segunda aba carregado aqui.' },
    ];
    return (
        <ShowcasePage title="Tabs" description="Separação de conteúdo em abas." code={`<Tabs tabs={tabs} defaultValue="1" />`}>
            <Tabs tabs={tabs} defaultValue="1" />
        </ShowcasePage>
    );
};

export default TabsPage;
