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

export const EmptyStatePage = () => (
    <ShowcasePage title="EmptyState" description="Estado vazio para listas ou telas sem dados." code={`<EmptyState title="..." />`}>
        <EmptyState
            icon={<Icon name="search" size={32} />}
            title="Nenhum resultado encontrado"
            description="Tente ajustar os filtros da sua busca para encontrar o que procura."
            action={<Button variant="outline">Limpar Filtros</Button>}
        />
    </ShowcasePage>
);

export default EmptyStatePage;
