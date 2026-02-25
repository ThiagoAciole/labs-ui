import { Tooltip, Button, Flex, Heading, Text } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TooltipPage() {
    return (
        <Playground.Root
            componentName="Tooltip"
            defaultProps={{
                content: 'Esta é uma dica contextual (Tooltip)!',
                placement: 'top'
            }}
            controls={{
                content: { type: 'text' },
                placement: {
                    type: 'select',
                    options: [
                        { value: 'top', label: 'Top' },
                        { value: 'bottom', label: 'Bottom' },
                        { value: 'left', label: 'Left' },
                        { value: 'right', label: 'Right' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Tooltip"
                description="O Tooltip fornece informações breves e contextuais quando o usuário passa o mouse ou foca em um elemento."
                aside={<Playground.Controls />}
            >
                <div style={{ padding: '4rem 0' }}>
                    <Playground.Preview render={(props) => (
                        <Flex justify="center">
                            <Tooltip {...props}>
                                <Button variant="outline">Passe o mouse ou foque aqui</Button>
                            </Tooltip>
                        </Flex>
                    )} />
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Variantes</Heading>
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        <Tooltip content="Informação útil" placement="left">
                            <Button size="sm">Esquerda</Button>
                        </Tooltip>
                        <Tooltip content="Informação útil" placement="top">
                            <Button size="sm">Cima</Button>
                        </Tooltip>
                        <Tooltip content="Informação útil" placement="bottom">
                            <Button size="sm">Baixo</Button>
                        </Tooltip>
                        <Tooltip content="Informação útil" placement="right">
                            <Button size="sm">Direita</Button>
                        </Tooltip>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




