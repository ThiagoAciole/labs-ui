import { Heading, Text, Card, CardBody, Flex, Icon, Code, IconButton } from '@aciolelabs/labs-ui';
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
          <Heading size="lg" style={{ marginBottom: '1rem' }}>
            Introducao
          </Heading>
          <Text size="lg" color="disabled">
            LabsUI e uma biblioteca de componentes React premium, focada em estetica moderna, performance e
            facilidade de uso. Com suporte nativo a Dark Mode e um sistema de design consistente.
          </Text>
        </section>

        <Card>
          <CardBody>
            <Heading size="m" style={{ marginBottom: '1rem' }}>
              Instalacao
            </Heading>
            <Flex gap="2" direction="column">
              <Text style={{ marginBottom: '1rem' }}>Rode o comando abaixo no seu terminal:</Text>
              <Flex gap="2" align="center">
                <Code >{installCode}</Code>
                <IconButton size='sm' icon="copy" onClick={() => navigator.clipboard.writeText(installCode)} />
              </Flex>
            </Flex>

          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Heading size="m" style={{ marginBottom: '1rem' }}>
              Como usar
            </Heading>
            <Flex gap="2" direction="column">
              <Text style={{ marginBottom: '1rem' }}> Para comecar a usar os componentes, envolva sua aplicacao com o <code>ThemeProvider</code> e importe os
                componentes desejados:</Text>
              <Flex gap="2" align="center">
                <Code block >{usageCode}</Code>
                <IconButton size='sm' icon="copy" onClick={() => navigator.clipboard.writeText(installCode)} />
              </Flex>
            </Flex>
          </CardBody>
        </Card>

        <section>
          <Heading size="m" style={{ marginBottom: '1rem' }}>
            Principios de design
          </Heading>
          <Flex gap="6" wrap="wrap">
            <Card style={{ flex: '1 1 300px' }}>
              <CardBody>
                <Flex align="center" gap="4" style={{ marginBottom: '1rem' }}>
                  <Icon name="sparkles" color="var(--text-primary)" />
                  <Heading size="s">Estetica premium</Heading>
                </Flex>
                <Text size="sm" color="disabled">
                  Designs modernos com sombras suaves, gradientes sutis e micro-interacoes.
                </Text>
              </CardBody>
            </Card>
            <Card style={{ flex: '1 1 300px' }}>
              <CardBody>
                <Flex align="center" gap="4" style={{ marginBottom: '1rem' }}>
                  <Icon name="theme-dark" color="var(--text-primary)" />
                  <Heading size="s">Dark Mode nativo</Heading>
                </Flex>
                <Text size="sm" color="disabled">
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




