import { Container, Heading, Text, Card, CardBody } from '@labsui/core';
import { SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ContainerPage() {
    return (
        <Playground.Root
            componentName="Container"
            defaultProps={{
                size: 'md'
            }}
            controls={{
                size: {
                    type: 'select',
                    options: SIZE_OPTIONS
                }
            }}
        >
            <ShowcasePage
                title="Container"
                description="O Container limita a largura horizontal do conteúdo, centralizando-o e garantindo uma leitura confortável em telas grandes."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', background: 'var(--color--grayLight)', padding: '2rem', borderRadius: 'var(--radius--lg)' }}>
                        <Container {...props} style={{ background: 'var(--color--violet)', color: 'var(--color--grayLight)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius--md)' }}>
                            <Heading size="s" style={{ color: 'inherit' }}>Conteúdo do Container</Heading>
                            <Text>Largura máxima baseada no tamanho: {props.size}</Text>
                        </Container>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Uso Recomendado</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li><strong>SM:</strong> Ideal para formulários centralizados ou Landing Pages minimalistas.</li>
                            <li><strong>MD/LG:</strong> Padrao para blogs e documentações.</li>
                            <li><strong>XL:</strong> Dashboards e interfaces ricas em dados.</li>
                            <li><strong>Full:</strong> Quando você precisa de controle total da largura, geralmente com grids internos.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




