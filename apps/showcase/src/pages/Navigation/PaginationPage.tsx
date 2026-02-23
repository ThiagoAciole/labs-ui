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

export const PaginationPage = () => {
    const [page, setPage] = useState(1);
    return (
        <ShowcasePage
            title="Pagination"
            description="Navegação para conteúdos divididos em múltiplas páginas."
            code={`<Pagination currentPage={page} totalPages={10} onPageChange={setPage} />`}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>

                    <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
                </div>

                <Card>
                    <CardBody>
                        Página atual selecionada: <strong>{page}</strong>
                    </CardBody>
                </Card>
            </div>
        </ShowcasePage>
    );
};

export default PaginationPage;
