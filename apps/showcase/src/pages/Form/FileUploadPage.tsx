import { FileUpload, Heading } from '@labsui/core';
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
                        <ul>
                            <li>Suporta múltiplos arquivos quando a prop <code>multiple</code> está ativa.</li>
                            <li>Validação de tamanho de arquivo integrada.</li>
                            <li>Feedback visual dinâmico durante o drag & drop.</li>
                        </ul>
                    </div>
                </div>
            </ShowcasePage>
        </Playground.Root>
    );
}




