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



const TopBarPage = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const navItems = [
        { label: 'Home', active: activeTab === 'Home', onClick: () => setActiveTab('Home') },
        { label: 'About', active: activeTab === 'About', onClick: () => setActiveTab('About') },
        { label: 'Contact', active: activeTab === 'Contact', onClick: () => setActiveTab('Contact') },
    ];

    const extraContent = (
        <>
            <IconButton
                variant="ghost"
                size="sm"
                icon={<Icon name="github" size={18} />}
                aria-label="GitHub"
            />
            <IconButton
                variant="ghost"
                size="sm"
                icon={<Icon name="linkedin" size={18} />}
                aria-label="LinkedIn"
            />
        </>
    );

    const themeToggle = (
        <IconButton
            variant="ghost"
            size="sm"
            className="theme-toggle-btn"
            icon={<Icon name="theme-dark" size={18} />}
            aria-label="Trocar Tema"
        />
    );

    return (
        <ShowcasePage
            title="TopBar"
            description="Componente de navegação superior flexível para cabeçalhos de aplicativos."
            code={`<TopBar 
  logo="Logo" 
  navItems={navItems} 
  navPosition="center" 
  extraContent={<IconButton.../>}
  themeToggle={<ThemeToggle.../>}
/>`}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', padding: '1rem', background: 'var(--labs-surface2)', borderRadius: '12px' }}>

                <section>
                    <p style={{ fontSize: '12px', color: 'var(--labs-text3)', marginBottom: '8px' }}>Padrão (Logo + Nav Centro + Ações)</p>
                    <TopBar
                        logo="Logo"
                        navItems={navItems}
                        extraContent={extraContent}
                        themeToggle={themeToggle}
                    />
                </section>

                <section>
                    <p style={{ fontSize: '12px', color: 'var(--labs-text3)', marginBottom: '8px' }}>Logo + Ações (Sem Nav)</p>
                    <TopBar
                        logo="Logo"
                        extraContent={extraContent}
                        themeToggle={themeToggle}
                    />
                </section>

                <section>
                    <p style={{ fontSize: '12px', color: 'var(--labs-text3)', marginBottom: '8px' }}>Só Ações (Direita)</p>
                    <TopBar
                        extraContent={extraContent}
                        themeToggle={themeToggle}
                    />
                </section>

                <section>
                    <p style={{ fontSize: '12px', color: 'var(--labs-text3)', marginBottom: '8px' }}>Nav na Direita</p>
                    <TopBar
                        logo="Logo"
                        navItems={navItems}
                        navPosition="right"
                    />
                </section>



            </div>
        </ShowcasePage>
    );
};

export default TopBarPage;
