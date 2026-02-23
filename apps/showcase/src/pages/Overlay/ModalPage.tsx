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

export const ModalPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <ShowcasePage title="Modal" description="Diálogos overlay." code={`<Modal open={open} title="Aviso">Conteúdo</Modal>`}>
            <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title="Configurações Avançadas"
                description="Ajuste os parâmetros do sistema LabsUI."
                footer={
                    <>
                        <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
                        <Button onClick={() => setOpen(false)}>Confirmar</Button>
                    </>
                }
            >
                Este é um exemplo de modal com transição neon e fundo embaçado.
            </Modal>
        </ShowcasePage>
    );
};

export default ModalPage;
