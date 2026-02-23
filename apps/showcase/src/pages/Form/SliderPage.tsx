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

export const SliderPage = () => {
    const [val, setVal] = useState(50);
    return (
        <ShowcasePage
            title="Slider"
            description="Entrada de intervalo numérico com interface visual."
            code={`<Slider label="Volume" value={val} onChange={(e) => setVal(e.target.value)} />`}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', maxWidth: '400px' }}>
                <Slider
                    label="Intensidade Solar"
                    value={val}
                    onChange={(e: any) => setVal(e.target.value)}
                />
                <Card>
                    <CardBody>
                        <Text>Valor atual: <Heading size={4}>{val}%</Heading></Text>
                    </CardBody>
                </Card>

                <Slider label="Desabilitado" disabled defaultValue={30} />
            </div>
        </ShowcasePage>
    );
};

export default SliderPage;
