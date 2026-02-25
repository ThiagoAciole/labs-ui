import { Link, Text, Heading } from '@labsui/core';
import { COLOR_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function LinkPage() {
    return (
        <Playground.Root
            componentName="Link"
            defaultProps={{ children: 'Clique aqui para navegar', href: '#', underline: true, color: 'primary' }}
            controls={{
                color: { type: 'select', options: COLOR_OPTIONS },
                underline: { type: 'boolean' }
            }}
        >
            <ShowcasePage title="Link" description="Links orientados por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Link {...props}>{props.children}</Link>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos de Uso</Heading>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Text>Links podem ser usados de forma isolada ou <Link href="#" underline color="primary">dentro de paragrafos</Link>.</Text>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <Link href="#" color="primary">Explorar Recursos</Link>
                            <Link href="#" color="neutral">Termos de Uso</Link>
                            <Link href="#" color="error">Apagar Conta</Link>
                        </div>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

