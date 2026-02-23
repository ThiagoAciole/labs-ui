import { useState } from 'react';
import {
    Icon, Button, IconButton, Badge, Input, TextArea, Search, Select, Checkbox,
    Radio, Switch, Slider, DatePicker, FileUpload, Avatar, Tag, Table, Thead,
    Tbody, Tr, Th, Td, Timeline, TimelineItem, Accordion, AccordionItem, EmptyState,
    Image, Card, CardBody, CardHeader, CardFooter, Link, Breadcrumb, Tabs,
    Pagination, DropdownMenu, TopBar, ToastProvider, useToast, Loader, Progress,
    Skeleton, Modal, Drawer, Tooltip, Container, Flex, Grid, Spacer, Divider,
    PageHeader, List, ListItem, MultiSelect, Text, Heading
} from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';

export default function ListPage() {
    const [variant, setVariant] = useState<any>('default');

    const code = `<List variant="${variant}">
  <ListItem 
    startContent={<Avatar initials="JD" size="sm" />}
    description="Software Engineer"
    endContent={<Button size="sm" variant="ghost">Ver Perfil</Button>}
  >
    John Doe
  </ListItem>
  <ListItem 
    startContent={<Avatar initials="AS" size="sm" color="success" />}
    description="Product Manager"
    endContent={<Button size="sm" variant="ghost">Ver Perfil</Button>}
  >
    Alice Smith
  </ListItem>
</List>`;

    return (
        <ShowcasePage
            title="List"
            description="Exibe fluxos contínuos de itens em uma única coluna vertical. Muito comum para listagem de configurações, contatos ou itens leves de banco de dados."
            code={code}
            controls={
                <Select
                    label="Variante"
                    value={variant}
                    onChange={(val) => setVariant(val)}
                    options={[
                        { value: 'default', label: 'Default' },
                        { value: 'bordered', label: 'Bordered' },
                        { value: 'divided', label: 'Divided' }
                    ]}
                />
            }
        >
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <List variant={variant}>
                    <ListItem
                        startContent={<Avatar initials="CS" size="sm" />}
                        description="csilva@labs.com"
                        endContent={<Badge variant="success">Ativo</Badge>}
                        onClick={() => alert("Clicou Carlos")}
                    >
                        Carlos Silva
                    </ListItem>

                    <ListItem
                        startContent={<Avatar initials="MC" size="sm" color="primary" />}
                        description="mclara@labs.com"
                        endContent={<Badge variant="warning">Pausado</Badge>}
                        onClick={() => alert("Clicou Maria")}
                    >
                        Maria Clara
                    </ListItem>

                    <ListItem
                        startContent={<Avatar initials="JP" size="sm" color="danger" />}
                        description="jpedro@labs.com"
                        endContent={<Badge variant="danger">Inativo</Badge>}
                        disabled
                    >
                        João Pedro
                    </ListItem>

                    <ListItem
                        startContent={<Icon name="settings" size={24} />}
                        description="Gerencie as configurações da sua organização."
                        endContent={<Icon name="chevron-right" size={16} />}
                        onClick={() => alert("Navegando...")}
                    >
                        Configurações Globais
                    </ListItem>
                </List>
            </div>
        </ShowcasePage>
    );
}
