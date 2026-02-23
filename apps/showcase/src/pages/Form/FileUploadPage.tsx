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

export const FileUploadPage = () => (
    <ShowcasePage title="FileUpload" description="Área para arrastar e enviar arquivos." code={`<FileUpload multiple onFileSelect={...} />`} noGrid>
        <div style={{ maxWidth: '600px', width: '100%' }}>
            <FileUpload multiple maxSize={5 * 1024 * 1024} accept="image/*, .pdf" />
        </div>
    </ShowcasePage>
);

export default FileUploadPage;
