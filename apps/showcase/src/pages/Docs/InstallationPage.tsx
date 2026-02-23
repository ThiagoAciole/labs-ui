import { Heading, Text, Card, CardBody, Container, Flex, Icon } from '@labsui/core';
import ShowcasePage from '../../components/ShowcasePage';

const InstallationPage = () => {
    const installCode = `npm install @labsui/core`;
    const usageCode = `import { ThemeProvider, Button } from '@labsui/core';
import '@labsui/core/dist/style.css'; // Opcional se já estiver no seu index.css

function App() {
  return (
    <ThemeProvider>
      <Button>Hello LabsUI</Button>
    </ThemeProvider>
  );
}`;

    return (
        <ShowcasePage
            title="Instalação"
            description="Aprenda a configurar e utilizar o LabsUI no seu projeto."
            noGrid
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                <section>
                    <Heading size={2} style={{ marginBottom: '1rem' }}>Introdução</Heading>
                    <Text size="lg" color="secondary">
                        LabsUI é uma biblioteca de componentes React premium, focada em estética moderna,
                        performance e facilidade de uso. Com suporte nativo a Dark Mode e um sistema de
                        design consistente.
                    </Text>
                </section>

                <Card>
                    <CardBody>
                        <Heading size={3} style={{ marginBottom: '1rem' }}>Instalação</Heading>
                        <Text style={{ marginBottom: '1rem' }}>Rode o comando abaixo no seu terminal:</Text>
                        <div className="code-snippet">
                            <pre><code>{installCode}</code></pre>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Heading size={3} style={{ marginBottom: '1rem' }}>Como Usar</Heading>
                        <Text style={{ marginBottom: '1.5rem' }}>
                            Para começar a usar os componentes, envolva sua aplicação com o <code>ThemeProvider</code>
                            e importe os componentes desejados:
                        </Text>
                        <div className="code-snippet">
                            <pre><code>{usageCode}</code></pre>
                        </div>
                    </CardBody>
                </Card>

                <section>
                    <Heading size={3} style={{ marginBottom: '1rem' }}>Princípios de Design</Heading>
                    <Flex gap="6" wrap="wrap">
                        <Card style={{ flex: '1 1 300px' }}>
                            <CardBody>
                                <Flex align="center" gap="4" style={{ marginBottom: '1rem' }}>
                                    <Icon name="sparkles" color="var(--primary)" />
                                    <Heading size={4}>Estética Premium</Heading>
                                </Flex>
                                <Text size="sm" color="secondary">
                                    Designs modernos com sombras suaves, gradientes sutis e micro-interações.
                                </Text>
                            </CardBody>
                        </Card>
                        <Card style={{ flex: '1 1 300px' }}>
                            <CardBody>
                                <Flex align="center" gap="4" style={{ marginBottom: '1rem' }}>
                                    <Icon name="theme-dark" color="var(--primary)" />
                                    <Heading size={4}>Dark Mode Nativo</Heading>
                                </Flex>
                                <Text size="sm" color="secondary">
                                    Otimizado para interfaces escuras com persistência automática de tema.
                                </Text>
                            </CardBody>
                        </Card>
                    </Flex>
                </section>
            </div>
        </ShowcasePage>
    );
};

export default InstallationPage;
