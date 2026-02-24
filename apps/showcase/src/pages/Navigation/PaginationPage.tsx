import { useState } from 'react';
import { Pagination, Heading, Card, CardBody } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function PaginationPage() {
    const [page, setPage] = useState(1);

    return (
        <Playground.Root
            componentName="Pagination"
            defaultProps={{
                totalPages: 10,
                variant: 'default',
                size: 'md'
            }}
            controls={{
                totalPages: { type: 'number' },
                variant: {
                    type: 'select',
                    options: [
                        { value: 'default', label: 'Default' },
                        { value: 'pills', label: 'Pills' }
                    ]
                },
                size: {
                    type: 'select',
                    options: [
                        { value: 'sm', label: 'Small' },
                        { value: 'md', label: 'Medium' },
                        { value: 'lg', label: 'Large' }
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Pagination"
                description="O componente Pagination permite navegar entre grandes conjuntos de dados divididos em partes menores, melhorando a performance e o foco do usuário."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                        <Pagination
                            {...props}
                            currentPage={page}
                            onPageChange={setPage}
                        />
                        <Card style={{ width: '200px', textAlign: 'center' }}>
                            <CardBody>
                                Página: <strong>{page}</strong>
                            </CardBody>
                        </Card>
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Dicas de Uso</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ul>
                            <li>Ideal para tabelas, grids de produtos e listas de resultados de busca.</li>
                            <li>Sempre informe ao usuário em qual página ele está no momento.</li>
                            <li>Tente não exibir muitos números de página de uma vez (o componente já gerencia o truncamento).</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




