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

export const ImagePage = () => (
    <ShowcasePage title="Image" description="Componente de imagem com suporte a loading state (Skeleton)." code={`<Image src="..." radius="lg" />`}>
        <Image
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop"
            alt="Gradient"
            radius="lg"
            style={{ width: '400px', height: '300px' }}
        />
    </ShowcasePage>
);

export default ImagePage;
