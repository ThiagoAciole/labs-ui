import { Timeline, TimelineItem, Heading, Text } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TimelinePage() {
    return (
        <Playground.Root
            componentName="Timeline"
            defaultProps={{
                // Timeline pode não ter props diretas no container ainda, 
                // mas podemos mostrar a estrutura
            }}
            controls={{}}
        >
            <ShowcasePage
                title="Timeline"
                description="Exiba eventos em ordem cronológica de forma visual e elegante, ideal para históricos, logs ou currículos."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={() => (
                    <div style={{ maxWidth: '600px', width: '100%' }}>
                        <Timeline>
                            <TimelineItem
                                title="LabsUI v1.0 Launch"
                                description="Lançamento oficial da biblioteca com mais de 30 componentes estáveis."
                                date="Hoje"
                                logo="https://img.icons8.com/color/48/rocket.png"
                            />
                            <TimelineItem
                                title="Beta Testing Phase"
                                description="Fase de testes fechados com foco em performance e acessibilidade."
                                date="Janeiro 2024"
                                logo="https://img.icons8.com/color/48/test-passed.png"
                            />
                            <TimelineItem
                                title="Project Concept"
                                description="Início da definição da stack tecnológica e princípios de design."
                                date="Outubro 2023"
                                logo="https://img.icons8.com/color/48/idea.png"
                            />
                        </Timeline>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variante Visual</Heading>
                    <Text style={{ marginTop: '0.5rem' }}>
                        A Timeline se adapta automaticamente. Se nenhum ícone (logo) for fornecido, ela utiliza um ponto minimalista.
                    </Text>
                    <div style={{ marginTop: '2rem', maxWidth: '600px' }}>
                        <Timeline>
                            <TimelineItem
                                title="Deploy concluído"
                                description="A aplicação foi enviada para o ambiente de produção com sucesso."
                                date="Há 5 minutos"
                            />
                            <TimelineItem
                                title="Build pendente"
                                description="Aguardando aprovação do pipeline principal."
                                date="Há 2 horas"
                            />
                        </Timeline>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




