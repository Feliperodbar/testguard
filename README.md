# TestGuard - Projeto de Automação E2E com Playwright

## 🎯 Objetivo do Projeto

Este projeto demonstra minhas habilidades como Analista de QA Júnior em automação de testes E2E usando **Playwright com TypeScript**. O objetivo é mostrar boas práticas de automação, organização de código e implementação de testes robustos para um site de e-commerce (Sauce Demo).

## 🛠️ Stack Técnica

| Ferramenta | Versão | Justificativa |
|------------|--------|----------------|
| Playwright | ^1.48.0 | Framework moderno para automação E2E com suporte a múltiplos navegadores, gravação de vídeos, screenshots e relatórios HTML nativos |
| TypeScript | ^5.6.0 | Adiciona tipagem estática ao JavaScript, melhorando a manutenibilidade do código e reduzindo bugs |
| @axe-core/playwright | ^4.10.0 | Biblioteca para testes de acessibilidade |
| GitHub Actions | - | CI/CD integrado ao GitHub, executando testes a cada push/PR e publicando relatórios |

## 📁 Estrutura de Pastas

```
testguard/
├── .github/
│   └── workflows/
│       └── playwright.yml       # Configuração do GitHub Actions
├── pages/                       # Page Objects
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/                       # Casos de teste
│   ├── login.spec.ts
│   ├── checkout.spec.ts
│   └── accessibility.spec.ts
├── fixtures/                    # Fixtures customizadas
│   └── testFixtures.ts
├── data/                        # Massa de dados
│   └── testData.json
├── utils/                       # Utilitários (em desenvolvimento)
├── playwright.config.ts         # Configuração do Playwright
├── tsconfig.json                # Configuração do TypeScript
└── package.json
```

## 🚀 Como Rodar Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/testguard.git
   cd testguard
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Instale os navegadores do Playwright**:
   ```bash
   npx playwright install
   ```

4. **Execute os testes**:
   ```bash
   # Todos os testes
   npm test
   
   # Modo headed (visível)
   npm test -- --headed
   
   # Relatório HTML
   npx playwright show-report
   ```

## 🧪 Casos de Teste Implementados

### 1. Login
- ✅ Login com credenciais válidas
- ✅ Login com usuário bloqueado
- ✅ Login com credenciais inválidas
- ✅ Login com username vazio
- ✅ Login com password vazio

### 2. Checkout (Happy Path)
- ✅ Adicionar produtos ao carrinho
- ✅ Verificar produtos no carrinho
- ✅ Preencher formulário de checkout
- ✅ Finalizar compra com sucesso

### 3. Acessibilidade
- ✅ Verificar violações de acessibilidade na página de login
- ✅ Verificar violações de acessibilidade na página de inventário

## 📊 CI/CD com GitHub Actions

O projeto está configurado com GitHub Actions para:
- Executar testes automaticamente a cada push ou pull request nas branches main/master
- Publicar o relatório HTML como artefato (retido por 30 dias)

## 📚 O que Eu Aprendi

1. **Page Object Model (POM)**: Aprendi a organizar o código separando a lógica de interação com as páginas dos casos de teste, tornando o código mais reutilizável e fácil de manter.
2. **Fixtures Customizadas**: Descobri como usar fixtures do Playwright para centralizar a criação de Page Objects e evitar repetição de código em cada teste.
3. **Testes de Acessibilidade**: Integrei o @axe-core/playwright para verificar violações de acessibilidade, um aspecto importante da qualidade de software que muitas vezes é negligenciado.
4. **CI/CD com GitHub Actions**: Configurei um pipeline automatizado que executa testes a cada mudança no código, garantindo que nenhum bug seja introduzido sem ser detectado.
5. **TypeScript em Automação**: A utilização de TypeScript me ajudou a evitar erros de tipo e a escrever código mais seguro e autodocumentado.

## 📝 Licença

MIT
