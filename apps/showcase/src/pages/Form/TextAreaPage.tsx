import { TextArea, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function TextAreaPage() {
    return (
        <Playground.Root
            componentName="TextArea"
            defaultProps={{
                label: 'Sua Mensagem',
                placeholder: 'Escreva algo aqui...',
                hint: 'Seja breve e direto.',
                rows: 4,
                full: true,
                disabled: false,
                resize: 'vertical'
            }}
            controls={{
                label: { type: 'text' },
                placeholder: { type: 'text' },
                hint: { type: 'text' },
                rows: { type: 'number' },
                resize: {
                    type: 'select',
                    options: [
                        { value: 'none', label: 'None' },
                        { value: 'vertical', label: 'Vertical' },
                        { value: 'horizontal', label: 'Horizontal' },
                        { value: 'both', label: 'Both' },
                    ]
                },
                full: { type: 'boolean' },
                disabled: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="TextArea"
                description="O TextArea é ideal para entradas de texto longas, com suporte a redimensionamento e estados de validação."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                        <TextArea {...props} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Estados</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', maxWidth: '500px' }}>
                        <TextArea label="Sucesso" defaultValue="Conteúdo válido" />
                        <TextArea label="Erro" error="Este campo é obrigatório" placeholder="Preencha..." />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
