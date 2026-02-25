import { PageHeader, Button, Heading, Text, Flex, Breadcrumb, Icon } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function PageHeaderPage() {
    return (
        <Playground.Root
            componentName="PageHeader"
            defaultProps={{
                title: 'Painel de Controle',
                description: 'Gerencie suas instâncias e visualize métricas em tempo real.'
            }}
            controls={{
                title: { type: 'text' },
                description: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="PageHeader"
                description="O PageHeader é usado para definir o contexto de uma página, fornecendo o título principal, uma descrição breve e ações primárias."
                aside={<Playground.Controls />}
            >
                <div style={{ background: 'var(--color--grayLight)', padding: '2rem', borderRadius: 'var(--radius--xl)' }}>
                    <Playground.Preview render={(props) => (
                        <PageHeader
                            {...props}
                            breadcrumb={
                                <Breadcrumb items={[
                                    { label: 'Cloud', href: '#' },
                                    { label: 'Projetos', href: '#' },
                                    { label: 'LabsUI' }
                                ]} />
                            }
                            actions={
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <Button variant="outline">Exportar</Button>
                                    <Button variant="solid" color="primary" icon="plus">Nova Campanha</Button>
                                </div>
                            }
                        />
                    )} />
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Anatomia</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li><strong>Breadcrumb:</strong> (Opcional) Ajuda o usuário a entender sua localização hierárquica.</li>
                            <li><strong>Title & Description:</strong> Define claramente o propósito da tela.</li>
                            <li><strong>Actions:</strong> Área dedicada para as ações globais mais importantes da página.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




