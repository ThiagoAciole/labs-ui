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

export const IconButtonPage = () => (
    <ShowcasePage title="IconButton" description="Botão que contém apenas um ícone." code={`<IconButton icon={<Icon name="spark" />} aria-label="Spark" />`}>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <IconButton icon={<Icon name="rocket" />} variant="primary" aria-label="Launch" />
            <IconButton icon={<Icon name="settings" />} variant="secondary" aria-label="Settings" />
            <IconButton icon={<Icon name="close" />} variant="danger" aria-label="Close" />
        </div>
    </ShowcasePage>
);

export default IconButtonPage;
