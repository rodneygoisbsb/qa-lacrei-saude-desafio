# 🏳️‍🌈 Desafio Técnico QA - Lacrei Saúde

> **Autor:** Rodney

> **Status do Projeto:** Entregue (Documentação e Automação concluídas)

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

[![Testes Automatizados Cypress](https://github.com/rodneygoisbsb/qa-lacrei-saude-desafio/actions/workflows/main.yml/badge.svg)](https://github.com/rodneygoisbsb/qa-lacrei-saude-desafio/actions/workflows/main.yml)

---

## Sobre o Projeto

Este repositório contém a solução técnica para o desafio de Quality Assurance da **Lacrei Saúde**. O objetivo foi validar a qualidade dos fluxos críticos da plataforma web (versão responsiva), aplicando as melhores práticas de QA, Automação e DevOps.

### Documentação Completa (Entrega Principal)

O relatório executivo, contendo o plano de testes, matriz de rastreabilidade e o detalhamento dos bugs encontrados, está disponível no Notion:

**[CLIQUE AQUI PARA ACESSAR O RELATÓRIO NO NOTION](https://cord-fin-e67.notion.site/Desafio-T-cnico-Quality-Assurance-na-Lacrei-Sa-de-2bb79cd581f18011aa71dc5278abced8)**

*(O relatório inclui evidências visuais dos testes manuais mobile e desktop)*

---

## Status do Ambiente e Bugs Encontrados

Durante a execução dos testes no [ambiente de homologação](https://paciente-staging.lacreisaude.com.br/), foram identificados bloqueios críticos de infraestrutura que impactaram a execução dos testes funcionais.

| Bug ID | Descrição Resumida | Impacto |
| :--- | :--- | :--- |
| **BUG-#001** | **Erro 500/409 no Cadastro** | Impede a criação de novos usuários e bloqueia grande parte dos fluxos que exigem login. |
| **BUG-#002** | **Falha no Serviço de SMS** | Impede o contato com os profissionais. |

> **Estratégia Adotada:** A automação foi configurada com `continue-on-error: true` no pipeline para garantir a geração de artefatos de teste mesmo diante da falha do servidor.

---

## Análise de Qualidade Técnica (Não-Funcionais)

Além dos testes funcionais, foram realizadas análises de qualidade técnica utilizando **Google Lighthouse** e validações manuais de responsividade.

### Desempenho (Performance)
**Ferramenta:** Google Lighthouse (Mobile Throttling)
* **Cenário:** Carregamento da Home/Login.
* **Resultado:** 44/100
* **Estabilidade sob Carga:** O teste de carga (simulação de 30 usuários simultâneos) foi **bloqueado** devido à instabilidade prévia da API (Bug #001 - Erro 500), que impede requisições concorrentes de cadastro.

### Acessibilidade (a11y)
**Ferramenta:** Lighthouse + Navegação por Teclado
* **Nota Lighthouse:** 96/100 (Meta: >90)
* **Validação Manual:**
    * Navegação via Teclado (Tab/Shift+Tab) funcional na tela de Login.
    * Contraste de cores adequado (validado automaticamente).

### Responsividade
Foram validados os breakpoints críticos de layout via DevTools:

| Dispositivo | Resolução | Resultado | Observação |
| :--- | :--- | :--- | :--- |
| **Mobile** | < 600px | ✅ Aprovado | Menu e formulários se adaptam verticalmente. |
| **Desktop** | > 1024px | ✅ Aprovado | Layout expandido utiliza corretamente o espaço lateral. |

---

## Tecnologias e Estrutura

O projeto segue a arquitetura **Page Objects** com **Cucumber (BDD)**.

* **Linguagem:** Javascript (Node.js v20)
* **Framework:** Cypress + Cucumber Preprocessor
* **CI/CD:** GitHub Actions
* **Evidências:** Screenshots e Vídeos (Armazenados em `docs/evidencias` e Artifacts)

### Estrutura de Pastas
```text
├── .github/workflows   # Pipeline de CI/CD
├── cypress
│   ├── e2e
│   │   ├── features    # Cenários BDD (.feature)
│   │   └── steps       # Scripts de Teste (.js)
│   └── ...
├── docs
│   └── evidencias      # Prints dos bugs encontrados (Erro 500, Mobile, SMS)
└── README.md           # Documentação