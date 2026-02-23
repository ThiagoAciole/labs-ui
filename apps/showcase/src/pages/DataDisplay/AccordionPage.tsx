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

export const AccordionPage = () => (
    <ShowcasePage title="Accordion" description="Paineis colapsáveis." code={`<Accordion><Accordion.Item title="...">...</Accordion.Item></Accordion>`}>
        <Accordion style={{ width: '100%', maxWidth: '600px' }}>
            <AccordionItem title="Como eu instalo a LabsUI?" id="q1">
                Para instalar a LabsUI você pode rodar o comando npm install @labsui/core.
            </AccordionItem>
            <AccordionItem title="Quais tecnologias são recomendadas?" id="q2">
                Recomendamos utilizar React com TypeScript para melhor experiência e tipagem.
            </AccordionItem>
            <AccordionItem title="Tem suporte a Dark Mode?" id="q3">
                Sim! A biblioteca foi desenvolvida com foco total em temas consistentes através de CSS variables.
            </AccordionItem>
        </Accordion>
    </ShowcasePage>
);

export default AccordionPage;
