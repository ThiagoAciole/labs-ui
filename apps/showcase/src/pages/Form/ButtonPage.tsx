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



export default function ButtonPage() {
    const [variant, setVariant] = useState<any>('primary');
    const [size, setSize] = useState<any>('md');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [fullWidth, setFullWidth] = useState(false);

    const code = `<Button 
  variant="${variant}" 
  size="${size}"${loading ? '\n  loading' : ''}${disabled ? '\n  disabled' : ''}${fullWidth ? '\n  fullWidth' : ''}
>
  Botão Labs
</Button>`;

    return (
        <ShowcasePage
            title="Button"
            description="O botão é um componente de interação primário."
            code={code}
            controls={
                <>
                    <Select
                        label="Variante"
                        value={variant}
                        onChange={(val) => setVariant(val)}
                        options={[
                            { value: 'primary', label: 'Primary' },
                            { value: 'secondary', label: 'Secondary' },
                            { value: 'ghost', label: 'Ghost' },
                            { value: 'outline', label: 'Outline' },
                            { value: 'danger', label: 'Danger' },
                        ]}
                    />
                    <Select
                        label="Tamanho"
                        value={size}
                        onChange={(val) => setSize(val)}
                        options={[
                            { value: 'sm', label: 'Small' },
                            { value: 'md', label: 'Medium' },
                            { value: 'lg', label: 'Large' },
                        ]}
                    />
                    <Switch
                        label="Loading"
                        checked={loading}
                        onChange={(e) => setLoading(e.target.checked)}
                    />
                    <Switch
                        label="Disabled"
                        checked={disabled}
                        onChange={(e) => setDisabled(e.target.checked)}
                    />
                    <Switch
                        label="Full Width"
                        checked={fullWidth}
                        onChange={(e) => setFullWidth(e.target.checked)}
                    />
                </>
            }
        >
            <Button
                variant={variant}
                size={size}
                loading={loading}
                disabled={disabled}
                fullWidth={fullWidth}
            >
                Botão Labs
            </Button>
        </ShowcasePage>
    );
}
