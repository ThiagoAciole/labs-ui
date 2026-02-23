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

export const FlexPage = () => (
    <ShowcasePage title="Flex" description="Container flexível." code={`<Flex justify="space-between" align="center" gap="4">...</Flex>`}>
        <Flex justify="space-between" align="center" gap="4" style={{ width: '100%', padding: '1rem', background: 'var(--labs-surface2)' }}>
            <Button>Item 1</Button>
            <Button>Item 2</Button>
            <Button>Item 3</Button>
        </Flex>
    </ShowcasePage>
);

export default FlexPage;
