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



export default function CardPage() {
    const [variant, setVariant] = useState<any>('default');
    const [padding, setPadding] = useState<any>('md');

    const code = `<Card variant="${variant}" padding="${padding}">
  <CardHeader 
    title="Título do Card" 
    description="Uma descrição breve para o componente"
    icon={<LabsIcon name="rocket" />}
  />
  <CardBody>
    Conteúdo principal do seu card.
  </CardBody>
  <CardFooter>
    <Button variant="ghost">Cancelar</Button>
    <Button>Salvar</Button>
  </CardFooter>
</Card>`;

    return (
        <ShowcasePage
            title="Card"
            description="Conteiners para agrupar informações relacionadas."
            code={code}
            controls={
                <>
                    <Select
                        label="Variante"
                        value={variant}
                        onChange={(val) => setVariant(val)}
                        options={[
                            { value: 'default', label: 'Default' },
                            { value: 'elevated', label: 'Elevated' },
                            { value: 'outlined', label: 'Outlined' },
                            { value: 'ghost', label: 'Ghost' },
                        ]}
                    />
                    <Select
                        label="Padding"
                        value={padding}
                        onChange={(val) => setPadding(val)}
                        options={[
                            { value: 'none', label: 'None' },
                            { value: 'sm', label: 'Small' },
                            { value: 'md', label: 'Medium' },
                            { value: 'lg', label: 'Large' },
                        ]}
                    />
                </>
            }
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '400px' }}>
                <Card variant={variant} padding={padding}>
                    <CardHeader
                        title="Labs UI Design"
                        description="Inspirado no futuro neon"
                        icon="rocket"
                    />
                    <CardBody>
                        A LabsUI foi desenhada para interfaces modernas e sombrias, com foco em usabilidade e estética neon violeta.
                    </CardBody>
                    <CardFooter>
                        <Button variant="ghost" size="sm">Ignorar</Button>
                        <Button size="sm">Explorar</Button>
                    </CardFooter>
                </Card>
            </div>
        </ShowcasePage>
    );
}
