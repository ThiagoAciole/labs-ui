import { Link, Text, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function LinkPage() {
    return (
        <Playground.Root
            componentName="Link"
            defaultProps={{ children: 'Clique aqui para navegar', href: '#', underline: true, color: 'violet' }}
            controls={{
                color: { type: 'select', options: [ { value: 'violet', label: 'Violet' }, { value: 'blue', label: 'Blue' }, { value: 'gray', label: 'Gray' }, { value: 'red', label: 'Red' } ] },
                underline: { type: 'boolean' }
            }}
        >
            <ShowcasePage title="Link" description="Links orientados por TokenColor." aside={<Playground.Controls />}>
                <Playground.Preview render={(props) => <Link {...props}>{props.children}</Link>} />
                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Exemplos de Uso</Heading>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Text>Links podem ser usados de forma isolada ou <Link href="#" underline color="violet">dentro de paragrafos</Link>.</Text>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <Link href="#" color="blue">Explorar Recursos</Link>
                            <Link href="#" color="gray">Termos de Uso</Link>
                            <Link href="#" color="red">Apagar Conta</Link>
                        </div>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}

