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

export const MultiSelectPage = () => {
    const [selected, setSelected] = useState<string[]>(['react']);
    const options = [
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte' }
    ];
    return (
        <ShowcasePage title="MultiSelect" description="Seleção múltipla com suporte a tags." code={`<MultiSelect options={...} />`} noGrid>
            <div style={{ maxWidth: '400px', width: '100%', paddingBottom: '12rem' }}>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    placeholder="Selecione os frameworks"
                />
            </div>
        </ShowcasePage>
    );
};

export default MultiSelectPage;
