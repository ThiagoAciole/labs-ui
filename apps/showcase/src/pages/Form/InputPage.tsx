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

export const InputPage = () => {
    const [val, setVal] = useState('');
    return (
        <ShowcasePage title="Input" description="Entrada de texto padrão." code={`<Input label="Nome" placeholder="Digite aqui..." />`}>
            <Input label="Exemplo" placeholder="Placeholder..." value={val} onChange={e => setVal(e.target.value)} fullWidth />
        </ShowcasePage>
    );
};

export default InputPage;
