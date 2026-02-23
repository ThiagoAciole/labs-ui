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

export const ToastPage = () => {
    const { toast } = useToast();
    return (
        <ShowcasePage title="Toast" description="Notificações temporárias." code={`toast({ title: "Sucesso!", variant: "success" })`}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button onClick={() => toast({ title: "Padrão", description: "Mensagem informativa básica." })}>Default</Button>
                <Button onClick={() => toast({ title: "Sucesso!", variant: "success" })}>Success</Button>
                <Button onClick={() => toast({ title: "Erro crítico", variant: "danger" })}>Danger</Button>
            </div>
        </ShowcasePage>
    );
};

export default ToastPage;
