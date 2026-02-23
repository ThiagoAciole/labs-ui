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

export const TooltipPage = () => (
    <ShowcasePage title="Tooltip" description="Dicas contextuais ao passar o mouse." code={`<Tooltip content="Informação">Alvo</Tooltip>`}>
        <Tooltip content="Isso é uma Labs Tooltip!">
            <Button variant="outline">Passe o mouse aqui</Button>
        </Tooltip>
    </ShowcasePage>
);

export default TooltipPage;
