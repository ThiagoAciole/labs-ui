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

export const LinkPage = () => (
    <ShowcasePage
        title="Link"
        description="Textos clicáveis para navegação interna ou externa."
        code={`<Link href="#" underline>Exemplo de Link</Link>`}
    >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link href="#">Link Padrão</Link>
            <Link href="#" underline>Link com Underline (Hover)</Link>
            <Link href="#" variant="accent">Link Accent</Link>
            <Link href="#" variant="muted">Link Muted</Link>
            <Link href="#" variant="danger">Link de Perigo</Link>
            <Text>Você pode usar links <Link href="#" underline>dentro de textos</Link> comuns.</Text>
        </div>
    </ShowcasePage>
);

export default LinkPage;
