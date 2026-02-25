import { Card, CardHeader, CardBody, CardFooter, Button, Heading, Text, Icon } from '@labsui/core';
import { SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function CardPage() {
    return (
        <Playground.Root
            componentName="Card"
            defaultProps={{
                variant: 'default',
                padding: 'md'
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'elevated', label: 'Elevated' },
                        { value: 'outlined', label: 'Outlined' },
                        { value: 'ghost', label: 'Ghost' },
                    ]
                },
                padding: {
                    type: 'select',
                    options: SIZE_OPTIONS
                }
            }}
        >
            <ShowcasePage
                title="Card"
                description="Contêineres versáteis para agrupar informações relacionadas, como cards de produtos, dashboards ou seções de conteúdo."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <Card {...props}>
                            <CardHeader
                                title="Labs UI Design"
                                description="Inspirado no futuro neon e estética cyberpunk."
                                icon="rocket"
                            />
                            <CardBody>
                                <Text>
                                    A LabsUI foi desenhada para interfaces modernas e sombrias, com foco em usabilidade e uma paleta de cores vibrante que se destaca no modo escuro.
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Button variant="ghost" size="sm">Ignorar</Button>
                                <Button size="sm">Explorar</Button>
                            </CardFooter>
                        </Card>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Anatomia do Card</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li><strong>CardHeader:</strong> Contém título, descrição opcional e ícones de suporte.</li>
                            <li><strong>CardBody:</strong> Área principal para qualquer tipo de conteúdo.</li>
                            <li><strong>CardFooter:</strong> Geralmente usado para ações relacionadas ao conteúdo do card.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root >
    );
}




