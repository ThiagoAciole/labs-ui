import { Flex, PageHeader, Panel, Container, Divider, Icon } from '@aciolelabs/labs-ui';

interface ShowcasePageProps {
    title: string;
    description: string;
    children: React.ReactNode;
    aside?: React.ReactNode;
    code?: string;
    controls?: React.ReactNode;
    noGrid?: boolean;
}

export default function ShowcasePage({ title, description, children, aside, code, controls }: ShowcasePageProps) {
    // Se não houver aside (novo padrão), mas houver controls/code (padrão antigo),
    // criamos um aside compatível usando o novo componente Panel.
    const renderedAside = aside || (
        (controls || code) ? (
            <Panel.Content>
                {controls && (
                    <Panel.Section title="Properties" icon={<Icon name="settings" size={14} />}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {controls}
                        </div>
                    </Panel.Section>
                )}
                {controls && code && (
                    <div style={{ margin: '1.5rem 0' }}>
                        <Divider />
                    </div>
                )}
                {code && (
                    <Panel.Section title="Source" icon={<Icon name="code" size={14} />}>
                        <div style={{
                            background: 'var(--grayBlack)',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-strong)',
                            marginTop: '0.5rem'
                        }}>
                            <pre style={{ margin: 0, fontSize: '12px', color: 'var(--primary)', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                                <code>{code}</code>
                            </pre>
                        </div>
                    </Panel.Section>
                )}
            </Panel.Content>
        ) : null
    );

    return (
        <Flex direction="row" style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            <div style={{ flex: 1, overflowY: 'auto', minWidth: 0, height: '100%' }}>
                <Container size="full" style={{ paddingBottom: '4rem' }}>
                    <PageHeader
                        title={title}
                        description={description}
                    />
                    {children}
                </Container>
            </div>

            {renderedAside && (
                <Panel side="right" width={380}>
                    {renderedAside}
                </Panel>
            )}
        </Flex>
    );
}
