import { Link, Text, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function LinkPage() {
    return (
        <Playground.Root
            componentName="Link"
            defaultProps={{
                children: 'Clique aqui para navegar',
                href: '#',
                underline: true,
                variant: 'default'
            }}
            controls={{
                variant: {
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'accent', label: 'Accent' },
                        { value: 'muted', label: 'Muted' },
                        { value: 'danger', label: 'Danger' }
                    ]
                },
                underline: { type: 'boolean' }
            }}
        >
            <ShowcasePage
                title="Link"
                description="Textos clicáveis para navegação interna ou externa, com suporte a diferentes estados e variantes."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Link {...props}>{props.children}</Link>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos de Uso</Heading>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Text>
                            Links podem ser usados de forma isolada ou <Link href="#" underline>dentro de parágrafos</Link> para referências rápidas.
                        </Text>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <Link href="#" variant="accent">Explorar Recursos</Link>
                            <Link href="#" variant="muted">Termos de Uso</Link>
                            <Link href="#" variant="danger">Apagar Conta</Link>
                        </div>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
