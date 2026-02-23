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

export const SkeletonPage = () => (
    <ShowcasePage
        title="Skeleton"
        description="Placeholders animados para estados de carregamento."
        code={`<Skeleton width="100%" height={20} />`}
    >
        <Card style={{ maxWidth: '400px', width: '100%' }}>
            <CardBody>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Skeleton circle width={48} height={48} />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Skeleton height={14} width="60%" />
                        <Skeleton height={10} width="40%" />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Skeleton height={100} />
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Skeleton height={32} width={80} />
                        <Skeleton height={32} width={80} />
                    </div>
                </div>
            </CardBody>
        </Card>
    </ShowcasePage>
);

export default SkeletonPage;
