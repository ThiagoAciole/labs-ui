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

export const TimelinePage = () => {
    return (
        <ShowcasePage
            title="Timeline"
            description="Exiba eventos em ordem cronológica de forma visual e elegante."
            code={`<Timeline>\n  <TimelineItem \n    title="Empresa" \n    description="Cargo" \n    date="2024" \n    logo="..." \n  />\n</Timeline>`}
            noGrid
        >
            <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}>
                <Timeline>
                    <TimelineItem
                        title="Job Company"
                        description="Software Engineer i10"
                        date="Jun 2025 - Present"
                    
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IFood_logo.svg/1200px-IFood_logo.svg.png"
                    />
                    <TimelineItem
                        title="Job Company"
                        description="Software Engineer i9"
                        date="Dez 2023 - Jun 2025"
                       
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IFood_logo.svg/1200px-IFood_logo.svg.png"
                    />
                    <TimelineItem
                        title="Job Company"
                        description="Software Engineer Intern"
                        date="Out 2022 - Dez 2023"
                        
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IFood_logo.svg/1200px-IFood_logo.svg.png"
                    />
                    <TimelineItem
                        title="Job Company"
                        description="Product Design intern"
                        date="Dez 2021 - Out 2022"
                       
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/IFood_logo.svg/1200px-IFood_logo.svg.png"
                    />
                </Timeline>

                <div style={{ marginTop: '4rem' }}>
                    <Heading size={5} style={{ marginBottom: '2rem' }}>Variante com Pontos (Dots)</Heading>
                    <Timeline>
                        <TimelineItem
                            title="Lançamento v1.0"
                            description="Primeira versão estável disponível para produção."
                            date="Há 2 dias"
                        />
                        <TimelineItem
                            title="Beta Fechado"
                            description="Testes com usuários selecionados e feedback inicial."
                            date="Há 1 mês"
                        />
                        <TimelineItem
                            title="Início do Projeto"
                            description="Definição da stack e arquitetura base."
                            date="Janeiro 2024"
                        />
                    </Timeline>
                </div>
            </div>
        </ShowcasePage>
    );
};

export default TimelinePage;
