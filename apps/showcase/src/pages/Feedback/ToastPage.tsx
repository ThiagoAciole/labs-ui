import { useToast, Button, Heading, Text, Flex } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ToastPage() {
    const { toast } = useToast();

    return (
        <Playground.Root
            componentName="Toast"
            defaultProps={{ title: 'Notificacao', description: 'Esta e uma mensagem de exemplo.', color: 'primary', duration: 3000 }}
            controls={{
                title: { type: 'text' },
                description: { type: 'text' },
                color: { type: 'select', options: [ { value: 'primary', label: 'Primary' }, { value: 'success', label: 'Success' }, { value: 'attention', label: 'Attention' }, { value: 'error', label: 'Error' }, { value: 'neutral', label: 'Neutral' } ] },
                duration: { type: 'number' }
            }}
        >
            <ShowcasePage title="Toast" description="Toast orientado por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => (
                    <Flex justify="center" align="center" style={{ minHeight: '100px' }}>
                        <Button onClick={() => toast({ title: props.title, description: props.description, color: props.color, duration: props.duration })}>Disparar Notificacao</Button>
                    </Flex>
                )} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Como usar</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Text>Use o <code>ToastProvider</code> e o hook <code>useToast</code>.</Text>
                        <pre style={{ background: 'var(--color--grayLight)', padding: '1.5rem', borderRadius: 'var(--radius--lg)', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color--violet)', overflow: 'auto' }}>
                            <code>{`const { toast } = useToast();\n\ntoast({\n  title: "Arquivo Salvo",\n  color: "success"\n});`}</code>
                        </pre>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

