import { Accordion, AccordionItem, Heading, Icon } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function AccordionPage() {
    return (
        <Playground.Root
            componentName="Accordion"
            defaultProps={{
                allowMultiple: false,
                variant: 'default'
            }}
            controls={{
                allowMultiple: { type: 'boolean' },
                variant: {
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'ghost', label: 'Ghost' },
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Accordion"
                description="O Accordion organiza informações em seções colapsáveis, economizando espaço e reduzindo a carga cognitiva."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        <Accordion {...props}>
                            <AccordionItem title="O que é o LabsUI?" id="p1">
                                Uma biblioteca de componentes focada em estética futurista, imersão em modo escuro e performance.
                            </AccordionItem>
                            <AccordionItem title="Como utilizar os Design Tokens?" id="p2">
                                Você pode acessar todos os tokens através das variáveis CSS injetadas pelo ThemeProvider.
                            </AccordionItem>
                            <AccordionItem title="Posso customizar os componentes?" id="p3">
                                Sim, todos os componentes aceitam classes customizadas e estilos através de CSS Variables.
                            </AccordionItem>
                        </Accordion>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Uso Sugerido</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Ideal para seções de FAQ (Perguntas Frequentes).</li>
                            <li>Agrupamento de configurações em painéis de controle.</li>
                            <li>Informações detalhadas que não precisam estar visíveis o tempo todo.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
