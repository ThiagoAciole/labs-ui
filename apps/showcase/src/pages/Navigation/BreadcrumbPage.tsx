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

export const BreadcrumbPage = () => (
    <ShowcasePage title="Breadcrumb" description="Trilha de navegação rastro de migalhas." code={`<Breadcrumb items={[{label: 'Home', href: '/'}]} />`}>
        <Breadcrumb
            items={[
                { label: 'Home', href: '#', icon: <Icon name="home" size={14} /> },
                { label: 'Componentes', href: '#' },
                { label: 'Breadcrumb' }
            ]}
        />
    </ShowcasePage>
);

export default BreadcrumbPage;
