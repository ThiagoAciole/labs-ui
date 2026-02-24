import { EmptyState, Icon, Button, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function EmptyStatePage() {
    return (
        <Playground.Root
            componentName="EmptyState"
            defaultProps={{
                title: 'Nenhum item encontrado',
                description: 'Parece que você ainda não criou nenhum conteúdo. Comece agora mesmo!',
                iconName: 'box',
                showAction: true
            }}
            controls={{
                title: { type: 'text' },
                description: { type: 'text' },
                iconName: { type: 'text' },
                showAction: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="EmptyState"
                description="O EmptyState é utilizado para preencher espaços onde ainda não há dados ou conteúdo disponível, guiando o usuário sobre o que fazer."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', padding: '2rem' }}>
                        <EmptyState
                            title={props.title}
                            description={props.description}
                            icon={props.iconName}
                            action={props.showAction ? <Button appearance="solid" color="primary">Criar Novo</Button> : undefined}
                        />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Dicas</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Use ícones que transmitam o contexto do estado vazio.</li>
                            <li>A descrição deve ser encorajadora e clara.</li>
                            <li>Sempre que possível, forneça uma ação primária para o usuário sair desse estado.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




