import { Input, Icon, Heading } from '@labsui/core';
import { SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function InputPage() {
    return (
        <Playground.Root
            componentName="Input"
            defaultProps={{
                label: 'Seu Nome',
                placeholder: 'Digite seu nome completo...',
                size: 'md',
                full: true,
                disabled: false,
                error: '',
                supportText: 'Como você gostaria de ser chamado?'
            }}
            controls={{
                label: { type: 'text' },
                placeholder: { type: 'text' },
                error: { type: 'text' },
                supportText: { type: 'text' },
                size: {
                    type: 'select',
                    options: SIZE_OPTIONS
                },
                disabled: { type: 'boolean' },
                full: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Input"
                description="Componente de entrada de texto flexível com suporte a ícones, estados de erro e labels descritivos."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <Input {...props} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos com Ícones</Heading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', maxWidth: '400px' }}>
                        <Input
                            label="E-mail"
                            placeholder="contato@empresa.com"
                            prefix={<Icon name="mail" size={16} />}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            placeholder="••••••••"
                            suffix={<Icon name="lock" size={16} />}
                        />
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

export { InputPage };




