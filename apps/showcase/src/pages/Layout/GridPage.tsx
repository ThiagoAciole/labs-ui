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

export const GridPage = () => (
    <ShowcasePage title="Grid" description="Sistema de grid com colunas fixas." code={`<Grid columns={3} gap="4">...</Grid>`}>
        <Grid columns={3} gap="4" style={{ width: '100%' }}>
            <div style={{ background: 'var(--labs-surface2)', padding: '1rem', textAlign: 'center' }}>1</div>
            <div style={{ background: 'var(--labs-surface2)', padding: '1rem', textAlign: 'center' }}>2</div>
            <div style={{ background: 'var(--labs-surface2)', padding: '1rem', textAlign: 'center' }}>3</div>
            <div style={{ background: 'var(--labs-surface2)', padding: '1rem', textAlign: 'center' }}>4</div>
        </Grid>
    </ShowcasePage>
);

export default GridPage;
