# Portal TI - IF Sertão PE | Campus Salgueiro
> **Status do Projeto:** MVP Completamente Funcional

Este portal é uma solução web institucional responsiva desenvolvida como Atividade Prática para a disciplina de Programação Web I. O objetivo principal é centralizar a divulgação dos cursos, corpo docente, projetos e notícias da Área de Tecnologia da Informação do Campus Salgueiro.

## Identificação dos Desenvolvedores
* **Estudante(s):** [Insira seu Nome Completo Aqui]
* **Curso:** Tecnologia em Sistemas para Internet / Técnico em Informática
* **Componente Curricular:** Programação Web I
* **Instituição:** Instituto Federal do Sertão Pernambucano - Campus Salgueiro

## Conceito Utilizado para o Design (UI/UX)
O design foi concebido sob a filosofia **Mobile-First** e **Clean Interface**, visando a máxima acessibilidade para estudantes da região:
* **Identidade Visual:** Utilização de uma paleta de cores institucional (variações de verde, branco e cinza-alt), transmitindo credibilidade, tecnologia e conexão com a identidade do IF Sertão PE.
* **Tipografia e Escaneabilidade:** Hierarquia de fontes clara baseada na legibilidade. Elementos pesados como tabelas e formulários foram tratados de forma fluida (tabela responsiva por scroll lateral em telas pequenas).
* **Acessibilidade Dinâmica (Dark Mode):** Implementação de um tema escuro nativo para reduzir a fadiga visual dos usuários em ambientes de estudo noturnos.

## Argumentos de Viabilidade da Proposta (MVP)
Como proposta de Produto Mínimo Viável (MVP), o portal demonstra alta viabilidade técnica e de negócio pelos seguintes fatores:
1. **Baixo Custo Operacional:** Construído puramente com tecnologias nativas (*Vanilla HTML5, CSS3 e JavaScript*), eliminando a dependência de frameworks robustos ou servidores de banco de dados caros na fase inicial.
2. **Desempenho e Leveza:** O uso do carregamento assíncrono controlado (`defer`) garante que o site carregue instantaneamente, mesmo em conexões de dados móveis limitadas (comum em zonas rurais assistidas pelo campus).
3. **Escalabilidade:** A separação modular dos scripts em arquivos independentes (`noticias.js`, `contato.js`, etc.) permite que futuras atualizações (como conexão com uma API REST real) sejam feitas sem a necessidade de reescrever a base da aplicação.

## Funcionalidades e Critérios Atendidos

### Estrutura Obrigatória (HTML5 & CSS3)
* **Menu de Navegação Local:** Links com âncoras suaves para rolagem interna na página.
* **Apresentação dos Cursos:** Cards estilizados com Flexbox/Grid para os cursos Técnico e Superior.
* **Tabela de Semestres:** Tabela responsiva exibindo o fluxo de turmas ativas de forma legível.
* **Rodapé Institucional:** Centralização de dados geográficos, contatos telefônicos e direitos autorais.

### Dinamismo e Manipulação do DOM (JavaScript)
* **Validação Blindada de Formulário:** Validação customizada no evento `submit` interceptando dados vazios ou e-mails sintaticamente incorretos (Regex), bloqueando o envio padrão e gerenciando alertas nativos.
* **Geração de Cards em Tempo Real (`innerHTML`):** O validador do formulário captura ativamente as entradas do usuário e gera dinamicamente um card visual estruturado no DOM logo abaixo do botão de envio.
* **Cadastro Dinâmico de Notícias:** Scripts dedicados via JavaScript para entrada de dados.

###  Diferenciais e Desafios Extras Implementados (+1,0 Ponto)
* [x] **Dark Mode Toggle:** Chaveamento de variáveis CSS Globais para inversão harmônica de cores.
* [x] **Menu Hambúrguer:** Responsividade móvel nativa ativada por gatilho de clique.
* [x] **Carrossel na Galeria de Projetos:** Sistema interativo de navegação com botões anteriores/próximos para os projetos da Fábrica de Software, Robótica e OBI.

## Organização do Repositório (Estrutura de Pastas)
```text
portal-ti/
├── index.html          # Estrutura e semântica de todas as seções
├── css/
│   └── style.css       # Layout responsivo, Grid, Flexbox e Temas
└── js/
    ├── temas.js        # Lógica do Dark Mode e Menu Hambúrguer
    ├── contato.js      # Validador e gerador de cards via innerHTML
    ├── professores.js  # Renderização do corpo docente
    ├── noticias.js     # Manipulação e persistência de notícias no LocalStorage
    └── projetos.js     # Lógica de paginação do carrossel de projetos
