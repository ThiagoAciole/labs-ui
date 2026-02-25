import { useState } from 'react';
import { SIZE_OPTIONS } from '../../config/categories/commonOptions';
import { Pagination, Heading, Card, Text } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';
import UseTips from '../../components/UseTips';

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
                    options: SIZE_OPTIONS
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
                            <Text> Página: <strong>{" "}{page}</strong></Text>
                        </Card>
                    </div>
                )} />

                <UseTips tips={["Ideal para tabelas, grids de produtos e listas de resultados de busca.", "Sempre informe ao usuário em qual página ele está no momento.", "Tente não exibir muitos números de página de uma vez (o componente já gerencia o truncamento)."]} />

            </ShowcasePage>
        </Playground.Root>
    );
}




