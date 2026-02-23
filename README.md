# LabsUI

Biblioteca de componentes React para uso em aplicacoes web.

## Instalacao

```bash
npm install @aciolelabs/labs-ui
```

## Uso

```tsx
import { ThemeProvider, Button } from '@aciolelabs/labs-ui';
import '@aciolelabs/labs-ui/styles';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello LabsUI</Button>
    </ThemeProvider>
  );
}
```

## Publicacao

```bash
npm run build --workspace=packages/labsui
npm publish --workspace=packages/labsui
```

`prepublishOnly` ja executa o build automaticamente no pacote.
