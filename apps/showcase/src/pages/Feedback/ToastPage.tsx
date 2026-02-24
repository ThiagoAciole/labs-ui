import { useToast, Button, Heading, Text, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ToastPage() {
    const { toast } = useToast();

    return (
        <Playground.Root
            componentName="Toast"
            defaultProps={{
                title: 'Notificação',
                description: 'Esta é uma mensagem de exemplo.',
                variant: 'default',
                duration: 3000
            }}
            controls={{
                title: { type: 'text' },
                description: { type: 'text' },
                variant: {
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'success', label: 'Success' },
                        { value: 'danger', label: 'Danger' },
                        { value: 'warning', label: 'Warning' },
                        { value: 'info', label: 'Info' }
                    ]
                },
                duration: { type: 'number' }
            }}
        >
            <ShowcasePage
                title="Toast"
                description="O Toast fornece feedback temporário e não intrusivo sobre o resultado de uma ação ou um alerta do sistema."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Flex justify="center" align="center" style={{ minHeight: '100px' }}>
                        <Button
                            onClick={() => toast({
                                title: props.title,
                                description: props.description,
                                variant: props.variant,
                                duration: props.duration
                            })}
                        >
                            Disparar Notificação
                        </Button>
                    </Flex>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Como usar</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Text>
                            O sistema de Toasts da LabsUI requer que você envolva sua aplicação com o <code>ToastProvider</code>. Depois, você pode usar o hook <code>useToast</code> para disparar notificações de qualquer lugar.
                        </Text>
                        <pre style={{
                            background: 'var(--surface-soft)',
                            padding: '1.5rem',
                            borderRadius: 'var(--labs-radius-lg)',
                            marginTop: '1.5rem',
                            fontSize: '0.875rem',
                            color: 'var(--primary)',
                            overflow: 'auto'
                        }}>
                            <code>{`const { toast } = useToast();\n\ntoast({\n  title: "Arquivo Salvo",\n  variant: "success"\n});`}</code>
                        </pre>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
