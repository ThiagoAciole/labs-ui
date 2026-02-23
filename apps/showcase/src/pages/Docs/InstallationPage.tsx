import { Heading, Text, Card, CardBody, Flex, Icon } from '@aciolelabs/labs-ui';
import ShowcasePage from '../../components/ShowcasePage';

const InstallationPage = () => {
  const installCode = `npm install @aciolelabs/labs-ui`;
  const usageCode = `import { ThemeProvider, Button } from '@aciolelabs/labs-ui';
import '@aciolelabs/labs-ui/styles'; // Opcional se ja estiver no seu index.css

function App() {
  return (
    <ThemeProvider>
      <Button>Hello LabsUI</Button>
    </ThemeProvider>
  );
}`;

  return (
    <ShowcasePage title="Instalacao" description="Aprenda a configurar e utilizar o LabsUI no seu projeto." noGrid>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
        <section>
          <Heading size={2} style={{ marginBottom: '1rem' }}>
            Introducao
          </Heading>
          <Text size="lg" color="secondary">
            LabsUI e uma biblioteca de componentes React premium, focada em estetica moderna, performance e
            facilidade de uso. Com suporte nativo a Dark Mode e um sistema de design consistente.
          </Text>
        </section>

        <Card>
          <CardBody>
            <Heading size={3} style={{ marginBottom: '1rem' }}>
              Instalacao
            </Heading>
            <Text style={{ marginBottom: '1rem' }}>Rode o comando abaixo no seu terminal:</Text>
            <div className="code-snippet">
              <pre>
                <code>{installCode}</code>
              </pre>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Heading size={3} style={{ marginBottom: '1rem' }}>
              Como usar
            </Heading>
            <Text style={{ marginBottom: '1.5rem' }}>
              Para comecar a usar os componentes, envolva sua aplicacao com o <code>ThemeProvider</code> e importe os
              componentes desejados:
            </Text>
            <div className="code-snippet">
              <pre>
                <code>{usageCode}</code>
              </pre>
            </div>
          </CardBody>
        </Card>

        <section>
          <Heading size={3} style={{ marginBottom: '1rem' }}>
            Principios de design
          </Heading>
          <Flex gap="6" wrap="wrap">
            <Card style={{ flex: '1 1 300px' }}>
              <CardBody>
                <Flex align="center" gap="4" style={{ marginBottom: '1rem' }}>
                  <Icon name="sparkles" color="var(--primary)" />
                  <Heading size={4}>Estetica premium</Heading>
                </Flex>
                <Text size="sm" color="secondary">
                  Designs modernos com sombras suaves, gradientes sutis e micro-interacoes.
                </Text>
              </CardBody>
            </Card>
            <Card style={{ flex: '1 1 300px' }}>
              <CardBody>
                <Flex align="center" gap="4" style={{ marginBottom: '1rem' }}>
                  <Icon name="theme-dark" color="var(--primary)" />
                  <Heading size={4}>Dark Mode nativo</Heading>
                </Flex>
                <Text size="sm" color="secondary">
                  Otimizado para interfaces escuras com persistencia automatica de tema.
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
