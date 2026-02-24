import { Tabs, Heading, Icon } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TabsPage() {
    const defaultTabs = [
        {
            value: 'overview',
            label: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon name="layout" size={16} />
                    <span>Visão Geral</span>
                </div>
            ),
            content: 'Este é o painel de visão geral onde você encontra as métricas principais.'
        },
        {
            value: 'security',
            label: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon name="lock" size={16} />
                    <span>Segurança</span>
                </div>
            ),
            content: 'Configurações de privacidade, autenticação e chaves de acesso.'
        },
        {
            value: 'billing',
            label: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon name="credit-card" size={16} />
                    <span>Faturamento</span>
                </div>
            ),
            content: 'Gerencie seu plano, faturas e métodos de pagamento.'
        },
    ];

    return (
        <Playground.Root
            componentName="Tabs"
            defaultProps={{
                variant: 'default',
                size: 'md'
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'pills', label: 'Pills' },
                    ]
                },
                size: {
                    type: 'select',
                    options: [
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Tabs"
                description="O componente Tabs organiza o conteúdo em seções mutuamente exclusivas, permitindo alternar entre elas de forma rápida."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', minHeight: '150px' }}>
                        <Tabs {...props} tabs={defaultTabs} defaultValue="overview" />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Dicas de UX</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Use abas para conteúdos relacionados que não precisam ser vistos simultaneamente.</li>
                            <li>Mantenha os labels das abas curtos e concisos.</li>
                            <li>Adicione ícones quando eles ajudarem na identificação visual rápida da seção.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




