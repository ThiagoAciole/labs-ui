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

export const DatePickerPage = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <ShowcasePage
            title="DatePicker"
            description="Seletor de datas premium com calendário customizado, navegação e suporte a reset."
            code={`const [date, setDate] = useState(new Date());\n\n<DatePicker \n  label="Agendamento" \n  value={date} \n  onChange={setDate} \n/>`}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '400px' }}>
                <DatePicker
                    label="Data do Evento"
                    value={date}
                    onChange={setDate}
                    fullWidth
                />

                <div style={{ padding: '1rem', background: 'var(--labs-surface2)', borderRadius: 'var(--labs-radius-md)', fontSize: '14px' }}>
                    Data Selecionada: <strong style={{ color: 'var(--labs-primary2)' }}>
                        {date ? date.toLocaleDateString('pt-BR') : 'Nenhuma'}
                    </strong>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <DatePicker label="Tamanho SM" size="sm" />
                    <DatePicker label="Desabilitado" disabled />
                </div>
            </div>
        </ShowcasePage>
    );
};

export default DatePickerPage;
