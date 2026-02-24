import { useState } from 'react';
import { Modal, Button, Heading, Text, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ModalPage() {
    const [open, setOpen] = useState(false);

    return (
        <Playground.Root
            componentName="Modal"
            defaultProps={{
                title: 'Confirmação de Ação',
                size: 'md',
                closeOnOverlayClick: true
            }}
            controls={{
                title: { type: 'text' },
                size: {
                    type: 'select',
                    options: [
                        { value: 'xs', label: 'Extra Small' },
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' },
                        { value: 'xl', label: 'Extra Large' },
                        { value: 'full', label: 'Full Screen' }
                    ]
                },
                closeOnOverlayClick: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Modal"
                description="O Modal é usado para diálogos que exigem a atenção do usuário ou para exibir conteúdo adicional sem sair do contexto atual."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                        <Button onClick={() => setOpen(true)}>Visualizar Modal</Button>
                        <Modal
                            {...props}
                            open={open}
                            onClose={() => setOpen(false)}
                            footer={
                                <Flex justify="flex-end" gap="2">
                                    <Button appearance="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
                                    <Button onClick={() => setOpen(false)}>Confirmar</Button>
                                </Flex>
                            }
                        >
                            <div style={{ padding: '0.5rem 0' }}>
                                <Text>
                                    Este é um exemplo de diálogo modal. Você pode ajustar o tamanho e outras propriedades nos controles laterais. O fundo utiliza um efeito de desfoque (blur) para manter o foco no conteúdo principal.
                                </Text>
                            </div>
                        </Modal>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Melhores Práticas</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Use modais para ações críticas que precisam de confirmação.</li>
                            <li>Tente manter o conteúdo do modal conciso e direto ao ponto.</li>
                            <li>Evite abrir modais de dentro de outros modais.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




