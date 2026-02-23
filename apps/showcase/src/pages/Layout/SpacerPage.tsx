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

export const SpacerPage = () => (
    <ShowcasePage title="Spacer" description="Adiciona espaçamento horizontal ou vertical." code={`<Spacer size="2rem" />`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>Conteúdo Acima</div>
            <Spacer size="2rem" />
            <div>Conteúdo Abaixo</div>
        </div>
    </ShowcasePage>
);

export default SpacerPage;
