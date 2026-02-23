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

export const CheckboxPage = () => {
    const [c, setC] = useState(false);
    return (
        <ShowcasePage title="Checkbox" description="Seleção binária ou múltipla." code={`<Checkbox label="Aceito os termos" />`}>
            <Checkbox label="Aceito os termos e condições de uso do LabsUI" checked={c} onChange={e => setC(e.target.checked)} />
        </ShowcasePage>
    );
};

export default CheckboxPage;
