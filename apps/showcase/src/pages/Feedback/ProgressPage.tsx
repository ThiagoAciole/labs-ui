import { Progress, Heading, Flex } from '@labsui/core';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ProgressPage() {
    return (
        <Playground.Root
            componentName="Progress"
            defaultProps={{ value: 65, color: 'primary', size: 'md', animated: true, showValue: true, label: 'Status do Processamento' }}
            controls={{
                value: { type: 'number' },
                color: { type: 'select', options: COLOR_OPTIONS },
                size: { type: 'select', options: SIZE_OPTIONS },
                animated: { type: 'boolean' }, showValue: { type: 'boolean' }, label: { type: 'text' }
            }}
        >
            <ShowcasePage title="Progress" description="Progress orientado por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <div style={{ width: '100%', maxWidth: '500px' }}><Progress {...props} /></div>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Estados por Cor</Heading>
                    <Flex direction="column" gap="4" style={{ marginTop: '1.5rem', maxWidth: '500px' }}>
                        <Progress value={100} color="success" label="Completo" showValue />
                        <Progress value={50} color="attention" label="Atencao" showValue />
                        <Progress value={20} color="error" label="Erro Critico" showValue />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

