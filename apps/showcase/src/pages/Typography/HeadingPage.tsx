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



const HeadingPage = () => {
    return (
        <ShowcasePage
            title="Heading"
            description="Componente para títulos com diferentes níveis e estilos."
            code={`<Heading size={1}>Título Nível 1</Heading>`}
            noGrid
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}>
                <Card>
                    <CardBody>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <Heading size={1}>Heading 1 - Future Neon</Heading>
                            <Heading size={2}>Heading 2 - Design System</Heading>
                            <Heading size={3}>Heading 3 - Aesthetic Components</Heading>
                            <Heading size={4}>Heading 4 - Premium Interface</Heading>
                            <Heading size={5}>Heading 5 - Dark Mode Ready</Heading>
                            <Heading size={6}>Heading 6 - Subtle Details</Heading>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Heading size={2} color="primary">Heading com Cor Primária</Heading>
                            <Heading size={2} color="accent">Heading com Cor Accent</Heading>
                            <Heading size={2} align="center">Heading Centralizado</Heading>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </ShowcasePage>
    );
};

export default HeadingPage;
