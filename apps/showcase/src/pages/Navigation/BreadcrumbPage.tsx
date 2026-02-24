import { Breadcrumb, Icon, Heading } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function BreadcrumbPage() {
    const defaultItems = [
        { label: 'Home', href: '#', icon: <Icon name="home" size={14} /> },
        { label: 'Componentes', href: '#' },
        { label: 'Navegação', href: '#' },
        { label: 'Breadcrumb' }
    ];

    return (
        <Playground.Root
            componentName="Breadcrumb"
            defaultProps={{
                separator: '/'
            }}
            controls={{
                separator: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="Breadcrumb"
                description="O Breadcrumb indica a localização do usuário dentro da hierarquia da aplicação, facilitando a navegação de retorno."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <Breadcrumb {...props} items={defaultItems} />
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Melhores Práticas</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Mantenha o item final sem link para indicar a página atual.</li>
                            <li>Use ícones apenas para o primeiro item (Home) para manter a clareza.</li>
                            <li>Ideal para aplicações com mais de 2 níveis de profundidade de navegação.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}
