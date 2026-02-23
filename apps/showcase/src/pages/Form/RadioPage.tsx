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

export const RadioPage = () => {
    const [selected, setSelected] = useState('1');
    return (
        <ShowcasePage title="Radio" description="Botão de seleção única." code={`<Radio label="Opção 1" checked />`}>
            <Flex direction="column" gap="4">
                <Radio
                    name="group1"
                    value="1"
                    label="Primeira Opção"
                    checked={selected === '1'}
                    onChange={(e) => setSelected(e.target.value)}
                />
                <Radio
                    name="group1"
                    value="2"
                    label="Segunda Opção"
                    description="Essa é uma descrição mais detalhada."
                    checked={selected === '2'}
                    onChange={(e) => setSelected(e.target.value)}
                />
                <Radio
                    name="group1"
                    value="3"
                    label="Opção Desabilitada"
                    disabled
                />
            </Flex>
        </ShowcasePage>
    );
};

export default RadioPage;
