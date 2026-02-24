---
name: labsui-design-system
description: Refatorar e evoluir o design system LabsUI com foco em reutilização de componentes existentes, tokens semânticos, consistência visual, acessibilidade, Clean Code e legibilidade. Use quando houver pedidos de criação/ajuste de componentes UI, migração de cores/variantes, correção de contraste, padronização de estados, redução de CSS customizado, simplificação de classNames e melhoria estrutural de código.
---

# LabsUI Design System Skill

## Objetivo

Executar mudanças de UI no LabsUI com consistência entre:
- biblioteca (`packages/labsui`)
- showcase (`apps/showcase`)
- tokens semânticos e estilos globais

Priorizar reutilização, legibilidade e baixo acoplamento.

## Regras de Arquitetura

1. Reutilizar antes de criar
- Tentar usar componentes já existentes antes de criar novos.
- Compor soluções usando `Button`, `IconButton`, `Tag`, `Badge`, `Checkbox`, `Input`, `DropdownContainer`, `Flex`, etc.
- Evitar duplicar comportamento já resolvido em outro componente.

2. Evitar CSS novo quando possível
- Preferir props e API dos componentes existentes.
- Só criar/editar CSS quando a API não cobrir o requisito.
- Quando CSS for necessário, manter mínimo e sem hardcode desnecessário.

3. Tokens semânticos obrigatórios
- Usar apenas: `default`, `primary`, `success`, `error`, `attention`, `neutral`, `disabled` (onde aplicável).
- Não usar aliases legados (`violet`, `blue`, `danger`, `warning`, `gray`, etc.).

4. className curto e limpo
- Refatorar nomes extensos e poluídos.
- Evitar prefixo `labs-` em novos nomes de classe.
- Usar nomes curtos, descritivos e consistentes.
- Exemplo: `labs-multiselect__item-checkbox` -> `multi-item-check`.

5. Visual e semântica
- `solid`: fundo semântico forte + conteúdo legível
- `soft`: fundo suave + texto semântico
- `outline`: borda semântica + fundo transparente
- `ghost`: transparente + texto semântico

6. Ícones e textos
- Em componentes compostos, usar `color="inherit"` quando a cor deve seguir o estado do container.
- Em conteúdo isolado, usar token explícito.

## Regras de Clean Code

1. Clareza
- Nomes de variáveis, funções e classes claros e curtos.
- Evitar nomes ambíguos e abreviações ruins.

2. Simplicidade
- Reduzir condições aninhadas e duplicação.
- Extrair funções utilitárias quando houver repetição real.

3. Coesão
- Cada componente deve ter responsabilidade clara.
- Separar lógica de estado, renderização e estilo quando necessário.

4. Legibilidade
- JSX limpo, sem ruído visual.
- Evitar blocos enormes; quebrar em partes pequenas quando fizer sentido.
- Manter consistência de formatação no arquivo.

5. Segurança de refatoração
- Não quebrar API pública sem necessidade.
- Se mudar tipos/tokens, atualizar showcase no mesmo ciclo.

## Fluxo Padrão

1. Entender o pedido e mapear componentes existentes reutilizáveis.
2. Implementar na biblioteca priorizando composição e props.
3. Reduzir CSS customizado e remover estilos redundantes.
4. Refatorar classNames para padrão curto e limpo (sem `labs-` em novos nomes).
5. Atualizar showcase para refletir a API final.
6. Validar estados: default, hover, focus, active, disabled, error/success/attention.

## Checklist de Entrega

- Reutilizou componentes existentes antes de criar novos
- Evitou CSS novo quando possível
- classNames simplificados e consistentes
- Tokens semânticos válidos
- Contraste e estados visuais corretos
- Código limpo, bonito e legível
- Showcase alinhado com a implementação final
