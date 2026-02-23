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

export const ContainerPage = () => (
    <ShowcasePage title="Container" description="Limita a largura máxima do conteúdo." code={`<Container size="md">...</Container>`}>
        <div style={{ width: '100%', background: 'var(--labs-surface2)', padding: '1rem' }}>
            <Container size="md" style={{ background: 'var(--labs-primary)', color: '#fff', padding: '1rem', textAlign: 'center' }}>
                Container Medium
            </Container>
        </div>
    </ShowcasePage>
);

export default ContainerPage;
