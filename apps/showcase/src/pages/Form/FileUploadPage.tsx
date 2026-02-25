import { FileUpload, Flex, Heading, Text, Badge, Icon } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';
import Playground from '../../components/Playground';

export default function FileUploadPage() {
    return (
        <Playground.Root
            componentName="FileUpload"
            defaultProps={{
                multiple: true,
                disabled: false,
                accept: 'image/*, .pdf',
                maxSize: 5242880 // 5MB
            }}
            controls={{
                multiple: { type: 'boolean' },
                disabled: { type: 'boolean' },
                accept: { type: 'text' }
            }}
        >
            <ShowcasePage
                title="FileUpload"
                description="O FileUpload permite aos usuários fazer upload de arquivos através de clique ou arrastar e soltar (drag & drop)."
                aside={<Playground.Controls />}
            >
                <Playground.Preview render={(props) => (
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        <FileUpload {...props} />
                    </div>
                )} />

                <div style={{ marginTop: '4rem' }}>
                    <Heading size="m">Dicas de Uso</Heading>
                    <div style={{ marginTop: '1.5rem' }}>
                        <Flex direction="column" gap="2">
                            <Flex align="center" gap="2" ><Icon name="check" /><Text> Suporta múltiplos arquivos quando a prop <Badge><code>multiple</code></Badge> está ativa.</Text></Flex>
                            <Flex align="center" gap="2"><Icon name="check" /><Text> Validação de tamanho de arquivo integrada.</Text></Flex>
                            <Flex align="center" gap="2" ><Icon name="check" /><Text> Feedback visual dinâmico durante o drag & drop.</Text></Flex>
                        </Flex>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




