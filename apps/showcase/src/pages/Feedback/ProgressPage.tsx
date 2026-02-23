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

export const ProgressPage = () => {
    const [progress, setProgress] = useState(40);
    return (
        <ShowcasePage
            title="Progress"
            description="Exibição visual do progresso de um processo."
            code={`<Progress value={45} animated />`}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '500px' }}>
                <Progress value={progress} showValue animated />

                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</Button>
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    <Progress value={100} variant="success" size="sm" />
                    <Progress value={75} variant="warning" />
                    <Progress value={25} variant="danger" size="lg" />
                </div>
            </div>
        </ShowcasePage>
    );
};

export default ProgressPage;
