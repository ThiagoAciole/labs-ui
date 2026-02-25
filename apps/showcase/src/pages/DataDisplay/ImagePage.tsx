import { Image, Heading, Flex } from '@labsui/core';
import { SIZE_OPTIONS } from '../../config/categories/commonOptions';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function ImagePage() {
    return (
        <Playground.Root
            componentName="Image"
            defaultProps={{
                src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop',
                alt: 'Abstract Gradient',
                radius: 'lg',
                objectFit: 'cover'
            }}
            controls={{
                src: { type: 'text' },
                alt: { type: 'text' },
                radius: {
                    type: 'select',
                    options: SIZE_OPTIONS
                },
                objectFit: {
                    type: 'select',
                    options: [
                        { value: 'cover', label: 'Cover' },
                        { value: 'contain', label: 'Contain' },
                        { value: 'fill', label: 'Fill' },
                    ]
                }
            }}
        >
            <ShowcasePage
                title="Image"
                description="O componente Image fornece uma maneira simples de exibir imagens com controle de bordas, carregamento progressivo e layouts flexíveis."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '500px', height: '350px' }}>
                        <Image {...props} style={{ width: '100%', height: '100%' }} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Arredondamento (Radius)</Heading>
                    <Flex gap="6" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop" radius="sm" style={{ width: '100px', height: '100px' }} alt={''} />
                        <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop" radius="md" style={{ width: '100px', height: '100px' }} alt={''} />
                        <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop" radius="lg" style={{ width: '100px', height: '100px' }} alt={''} />
                        <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop" radius="full" style={{ width: '100px', height: '100px' }} alt={''} />
                    </Flex>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




