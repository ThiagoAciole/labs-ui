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

export const TagPage = () => (
    <ShowcasePage title="Tag" description="Rótulos curtos e removíveis." code={`<Tag onRemove={() => {}}>React</Tag>`}>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Tag variant="primary">Design</Tag>
            <Tag onRemove={() => alert('Removido')}>Frontend</Tag>
        </div>
    </ShowcasePage>
);

export default TagPage;
