#language: pt

Funcionalidade: Busca de Profissionais da Saúde
  Como uma pessoa usuária cadastrada na plataforma Lacrei Saúde
  Quero buscar profissionais de saúde disponíveis
  Para poder agendar consultas e receber atendimento

  Contexto:
    Dado que estou logado na plataforma
    E estou na tela de busca

    Cenário: Buscar profissional por especialidade
        Quando digito "Psicologia" no campo de busca
        E clico em "Pesquisar"
        Então devo ver uma lista de profissionais dessa especialidade

    Cenário: Contatar um profissional com validação de segurança
        Dado que estou logado e acesso o perfil de um profissional
        Quando clico no botão "Exibir contato" na aba atendimentos
        Então devo ser direcionado para a tela de validação por SMS
        Quando informo meu número de celular
        E insiro o código de verificação recebido
        Então os dados de contato (WhatsApp/Email) devem ser exibidos