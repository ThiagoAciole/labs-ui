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

export const AvatarPage = () => (
    <ShowcasePage
        title="Avatar"
        description="Representação visual de usuários ou entidades."
        code={`<Avatar src="..." initials="TL" size="md" />`}
        noGrid
    >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}>
            <Card>
                <CardBody title="Tamanhos">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <Avatar size="sm" initials="SM" />
                        <Avatar size="md" initials="MD" />
                        <Avatar size="lg" initials="LG" bordered />
                        <Avatar size="xl" initials="XL" />
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody title="Variantes">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <Avatar shape="square" initials="SQ" />
                        <Avatar shape="circle" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop" />
                        <Avatar shape="circle" initials="ER" src="invalid-url" />
                        <Avatar size="lg" fallbackIcon="star" />
                    </div>
                </CardBody>
            </Card>
        </div>
    </ShowcasePage>
);

export default AvatarPage;
