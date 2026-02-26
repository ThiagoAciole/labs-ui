import {
    Button,
    IconButton,
    Input,
    TextArea,
    Checkbox,
    Radio,
    Switch,
    Badge,
    Tag,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Avatar,
    Flex,
    Grid,
    Search,
    Select,
    MultiSelect,
    Loader,
    Progress,
    Skeleton,
    Breadcrumb,
    Tabs,
    Panel,
    Sidebar,
    TopBar,
    Icon,
    availableIcons,
    Divider,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Tooltip,
    Modal,
    Drawer,
    Link,
    Accordion,
    AccordionItem,
    EmptyState,
    Image,
    Timeline,
    TimelineItem,
    Pagination,
    useTheme
} from '@labsui/core';
import { useState } from 'react';

export default function FigmaExportPage() {
    const { theme } = useTheme();
    const variants: any[] = ['solid', 'soft', 'outline', 'ghost'];
    const colors: any[] = ['primary', 'error', 'attention', 'success', 'neutral'];
    const sizes: any[] = ['xs', 'sm', 'md', 'lg', 'xl'];

    // States for interactive components
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div style={{ padding: '60px', background: 'var(--color-bg-base)', minHeight: '100%', position: 'relative' }}>
            <Heading size="xl" style={{ marginBottom: '60px' }}>LabsUI - Full Design System Export</Heading>

            {/* --- SHELL COMPONENTS --- */}
            <section style={{ marginBottom: '100px' }}>
                <Heading size="lg" style={{ marginBottom: '32px', borderBottom: '2px solid var(--color-border-subtle)', paddingBottom: '12px' }}>Shell & Layout</Heading>

                <div style={{ border: '1px solid var(--color-border-subtle)', borderRadius: '12px', overflow: 'hidden', background: 'var(--color-bg-surface)', marginBottom: '40px' }}>
                    <TopBar
                        themeToggle
                        extraContent={<Button size="sm">Action</Button>}
                        logo={<Heading size="xs">TopBar Logo</Heading>}
                    />
                    <div style={{ height: '400px', display: 'flex' }}>
                        <Sidebar>
                            <Sidebar.Header logo={<Heading size="xs">Sidebar Logo</Heading>} />
                            <Sidebar.Nav>
                                <Sidebar.Group title="Overview" icon={<Icon name="layout-dashboard" size={20} />}>
                                    <Sidebar.Item icon={<Icon name="home" />} active>Dashboard</Sidebar.Item>
                                    <Sidebar.Item icon={<Icon name="users" />}>Users</Sidebar.Item>
                                </Sidebar.Group>
                                <Sidebar.Group title="Settings" icon={<Icon name="settings" size={20} />}>
                                    <Sidebar.Item icon={<Icon name="shield" />}>Security</Sidebar.Item>
                                </Sidebar.Group>
                            </Sidebar.Nav>
                            <Sidebar.Footer>
                                <Sidebar.User name="Thiago Aciole" role="Admin" />
                            </Sidebar.Footer>
                        </Sidebar>
                        <main style={{ flex: 1, padding: '24px', background: 'var(--color-bg-base)' }}>
                            <Heading size="md">Content Area</Heading>
                            <Text>Exemplo de layout com Sidebar e TopBar.</Text>
                        </main>
                    </div>
                </div>
            </section>

            {/* --- TYPOGRAPHY & FOUNDATION --- */}
            <section style={{ marginBottom: '100px' }}>
                <Heading size="lg" style={{ marginBottom: '32px', borderBottom: '2px solid var(--color-border-subtle)', paddingBottom: '12px' }}>Typography & Foundation</Heading>
                <Grid columns={2} gap="10">
                    <Flex direction="column" gap="4">
                        <Heading size="xl">Heading XL</Heading>
                        <Heading size="lg">Heading LG</Heading>
                        <Heading size="md">Heading MD</Heading>
                        <Heading size="sm">Heading SM</Heading>
                        <Heading size="xs">Heading XS</Heading>
                    </Flex>
                    <Flex direction="column" gap="4">
                        <Text size="lg" weight="bold">Large Bold Text</Text>
                        <Text size="md">Medium Default Text</Text>
                        <Text size="sm" color="neutral">Small Neutral Text</Text>
                        <Text size="xs" color="disabled">Extra Small Disabled Text</Text>
                        <Link href="#">Actionable Link</Link>
                    </Flex>
                </Grid>
                <div style={{ margin: '40px 0' }}><Divider /></div>
                <Heading size="sm" style={{ marginBottom: '16px' }}>Common Icons</Heading>
                <Flex gap="4" wrap="wrap">
                    {availableIcons.slice(0, 20).map(icon => (
                        <Flex key={icon} direction="column" align="center" gap="2" style={{ padding: '12px', border: '1px solid var(--color-border-subtle)', borderRadius: '8px', minWidth: '80px' }}>
                            <Icon name={icon as any} size={24} />
                            <Text size="xs">{icon}</Text>
                        </Flex>
                    ))}
                </Flex>
            </section>

            {/* --- BUTTONS --- */}
            <section style={{ marginBottom: '100px' }}>
                <Heading size="lg" style={{ marginBottom: '32px', borderBottom: '2px solid var(--color-border-subtle)', paddingBottom: '12px' }}>Buttons</Heading>

                <Flex direction="column" gap="10">
                    {variants.map(variant => (
                        <div key={variant}>
                            <Text weight="bold" style={{ marginBottom: '16px', textTransform: 'capitalize' }}>Variant: {variant}</Text>
                            <Flex gap="4" wrap="wrap">
                                {colors.map(color => (
                                    <Button key={color} variant={variant} color={color}>
                                        {color}
                                    </Button>
                                ))}
                                <Button variant={variant} color="primary" icon="plus">With Icon</Button>
                                <Button variant={variant} color="primary" loading>Loading</Button>
                                <Button variant={variant} color="primary" disabled>Disabled</Button>
                            </Flex>
                        </div>
                    ))}
                </Flex>

                <div style={{ marginTop: '40px' }}>
                    <Text weight="bold" style={{ marginBottom: '16px' }}>Sizes</Text>
                    <Flex gap="4" align="center">
                        {sizes.map(size => (
                            <Button key={size} size={size} color="primary">Button {size}</Button>
                        ))}
                    </Flex>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <Text weight="bold" style={{ marginBottom: '16px' }}>Icon Buttons</Text>
                    <Flex gap="4" wrap="wrap">
                        {variants.map(variant => (
                            <IconButton key={variant} variant={variant} icon="plus" color="primary" />
                        ))}
                        <IconButton size="lg" icon="settings" color="primary" />
                        <IconButton size="md" icon="settings" color="primary" />
                        <IconButton size="sm" icon="settings" color="primary" />
                    </Flex>
                </div>
            </section>

            {/* --- FORMS --- */}
            <section style={{ marginBottom: '100px' }}>
                <Heading size="lg" style={{ marginBottom: '32px', borderBottom: '2px solid var(--color-border-subtle)', paddingBottom: '12px' }}>Forms</Heading>
                <Grid columns={2} gap="10">
                    <Flex direction="column" gap="5">
                        <Input label="Default Input" placeholder="Placeholder..." />
                        <Input label="With Prefix" prefix={<Icon name="mail" size={16} />} placeholder="email@example.com" />
                        <Input label="Error State" error="Invalid input" value="Wrong value" />
                        <Input label="Support Text" supportText="Ensure your password is strong" />
                        <Search placeholder="Search components..." />
                        <TextArea label="TextArea" placeholder="Type something..." />
                    </Flex>
                    <Flex direction="column" gap="5">
                        <Select label="Select Field" options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} />
                        <div>
                            <Text size="xs" weight="medium" color="neutral" style={{ marginBottom: '4px', display: 'block' }}>MultiSelect</Text>
                            <MultiSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }, { value: '3', label: 'Option 3' }]} value={['1', '2']} />
                        </div>
                        <Checkbox label="Checkbox Item" onChange={() => { }} />
                        <Checkbox label="Checked Item" checked onChange={() => { }} />
                        <Radio label="Radio Item" name="export-radio" onChange={() => { }} />
                        <Radio label="Checked Radio" name="export-radio" checked onChange={() => { }} />
                        <Flex gap="6">
                            <Switch label="Default Switch" onChange={() => { }} />
                            <Switch label="Checked" checked onChange={() => { }} />
                        </Flex>
                        <Pagination totalPages={5} currentPage={1} onPageChange={() => { }} />
                    </Flex>
                </Grid>
            </section>

            {/* --- DATA DISPLAY --- */}
            <section style={{ marginBottom: '100px' }}>
                <Heading size="lg" style={{ marginBottom: '32px', borderBottom: '2px solid var(--color-border-subtle)', paddingBottom: '12px' }}>Data Display</Heading>
                <Flex direction="column" gap="10">
                    <Flex gap="4" wrap="wrap" align="center">
                        <Badge color="primary">Primary</Badge>
                        <Badge color="success">Success</Badge>
                        <Badge color="error">Error</Badge>
                        <Badge color="attention">Attention</Badge>
                        <Badge color="neutral">Neutral</Badge>
                    </Flex>
                    <Flex gap="4" wrap="wrap" align="center">
                        <Tag color="primary">Primary Tag</Tag>
                        <Tag color="success">Success</Tag>
                        <Tag color="error" closable>Closable</Tag>
                        <Tag variant="outline">Outline</Tag>
                    </Flex>
                    <Flex gap="6" align="center">
                        <Avatar initials="TA" size="xl" bordered />
                        <Avatar initials="LI" size="lg" />
                        <Avatar initials="JS" size="md" />
                        <Avatar size="sm" />
                    </Flex>
                </Flex>

                <div style={{ marginTop: '40px' }}>
                    <Table striped>
                        <Thead>
                            <Tr>
                                <Th>Component</Th>
                                <Th>Status</Th>
                                <Th>Version</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr><Td>Button</Td><Td><Badge color="success">Done</Badge></Td><Td>1.0.0</Td></Tr>
                            <Tr><Td>Input</Td><Td><Badge color="success">Done</Badge></Td><Td>1.0.0</Td></Tr>
                            <Tr><Td>Table</Td><Td><Badge color="attention">Beta</Badge></Td><Td>0.5.0</Td></Tr>
                        </Tbody>
                    </Table>
                </div>

                <Grid columns={2} gap="6" style={{ marginTop: '40px' }}>
                    <Card>
                        <CardHeader title="Project Overview" description="Recent activities in your workspace" />
                        <CardBody>
                            <Timeline>
                                <TimelineItem title="Project Created" description="Initial setup completed." />
                                <TimelineItem title="Deploy to Vercel" description="Awaiting confirmation." />
                            </Timeline>
                        </CardBody>
                        <CardFooter>
                            <Button variant="ghost" full>View All</Button>
                        </CardFooter>
                    </Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <Accordion>
                            <AccordionItem title="Is it customizable?">Yes, using design tokens.</AccordionItem>
                            <AccordionItem title="Can I use it with Figma?">Absolutely, use this page!</AccordionItem>
                        </Accordion>
                        <EmptyState
                            icon="search"
                            title="No results found"
                            description="Try adjusting your search filters to find what you're looking for."
                            action={<Button size="sm">Clear Filters</Button>}
                        />
                    </div>
                </Grid>

                <Grid columns={2} gap="6" style={{ marginTop: '40px' }}>
                    <div style={{ position: 'relative', height: '200px', border: '1px solid var(--color-border-subtle)', borderRadius: '8px', overflow: 'hidden' }}>
                        <Panel opened={true} side="right" style={{ position: 'absolute', top: 0, right: 0, height: '100%', width: '100%', zIndex: 1 }}>
                            <Panel.Header title="System Panel" />
                            <Panel.Content>
                                <Text size="sm">Panel content for Figma reference.</Text>
                            </Panel.Content>
                        </Panel>
                    </div>
                    <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop" alt="Demo" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                </Grid>
            </section>

            {/* --- FEEDBACK & OVERLAYS --- */}
            <section style={{ marginBottom: '100px' }}>
                <Heading size="lg" style={{ marginBottom: '32px', borderBottom: '2px solid var(--color-border-subtle)', paddingBottom: '12px' }}>Feedback & Overlays</Heading>
                <Grid columns={2} gap="10">
                    <Flex direction="column" gap="6">
                        <Loader size="lg" />
                        <Progress value={70} showValue label="Disk Usage" />
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Skeleton width="120px" height="40px" />
                            <Skeleton circle width={40} height={40} />
                        </div>
                    </Flex>
                    <Flex direction="column" gap="6">
                        <Flex gap="4">
                            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                            <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
                        </Flex>
                        <div style={{ display: 'flex', gap: '32px', marginTop: '16px' }}>
                            <Tooltip content="Helper info here" placement="top">
                                <Text style={{ textDecoration: 'underline' }}>Hover for Tooltip</Text>
                            </Tooltip>
                        </div>
                    </Flex>
                </Grid>

                {/* Visual placeholders for overlays if they were open */}
                {(isModalOpen || isDrawerOpen) && (
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ background: 'var(--color-bg-surface)', padding: '24px', borderRadius: '12px', width: '400px', border: '1px solid var(--color-border-subtle)' }}>
                            <Heading size="sm">Example Overlay</Heading>
                            <Text>This is a component preview. Click to close.</Text>
                            <Flex justify="flex-end" gap="2" style={{ marginTop: '24px' }}>
                                <Button variant="ghost" onClick={() => { setIsModalOpen(false); setIsDrawerOpen(false); }}>Close</Button>
                            </Flex>
                        </div>
                    </div>
                )}
            </section>

            {/* --- NAVIGATION --- */}
            <section style={{ marginBottom: '100px' }}>
                <Heading size="lg" style={{ marginBottom: '32px', borderBottom: '2px solid var(--color-border-subtle)', paddingBottom: '12px' }}>Navigation</Heading>
                <Flex direction="column" gap="8">
                    <Breadcrumb items={[
                        { label: 'Home', href: '#' },
                        { label: 'Components', href: '#' },
                        { label: 'Export' }
                    ]} />
                    <Tabs tabs={[
                        { value: '1', label: 'General', content: 'General Settings Content' },
                        { value: '2', label: 'Security', content: 'Security Settings Content' },
                        { value: '3', label: 'Notifications', disabled: true, content: '' }
                    ]} defaultValue="1" />
                </Flex>
            </section>

            {/* Added floating info for designer */}
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '12px 20px', background: 'rgb(124, 58, 237)', color: 'white', borderRadius: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 999 }}>
                <Text size="sm" weight="bold">LabsUI Export Mode: {theme.toUpperCase()}</Text>
            </div>
        </div>
    );
}
