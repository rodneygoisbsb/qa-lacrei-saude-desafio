#language: pt

Funcionalidade: Cadastro de Pessoa Usuária
  Como uma pessoa usuária que deseja atendimento
  Quero me cadastrar na plataforma Lacrei Saúde
  Para poder buscar e contatar profissionais de saúde

  Contexto:
    Dado que estou na página inicial da Lacrei Saúde

    Cenário: Realizar cadastro com sucesso
        Quando clico na opção "Criar conta"
        E preencho o formulário de cadastro com:
          | Campo                 | Valor                |
          | Nome civil ou social  | Rodney               |
          | Sobrenome             | Teste QA             |
          | E-mail                | rodney+qa@teste.com  |
          | Confirme seu e-mail   | rodney+qa@teste.com  |
          | Senha                 | Lacrei@123           |
          | Confirme sua senha    | Lacrei@123           |
        E seleciono a opção "Li e concordo com os Termos de uso e Política de privacidade"
        E seleciono a opção "Tenho 18 anos ou mais"
        E clico no botão "Cadastrar"
        E clico no botão "Cadastrar"
        Então devo ver uma mensagem informativa para verificar meu e-mail
        E devo ser redirecionado automaticamente para a tela de Login

    Cenário: Tentar cadastrar com email já existente
        Quando clico na opção "Criar conta"
        E preencho o formulário de cadastro com:
          | Campo                 | Valor                |
          | Nome civil ou social  | Rodney               |
          | Sobrenome             | Duplicado            |
          | E-mail                | rodneygois2013@gmail.com |
          | Confirme seu e-mail   | rodneygois2013@gmail.com |
          | Senha                 | Lacrei@123           |
          | Confirme sua senha    | Lacrei@123           |
        E seleciono a opção "Li e concordo com os Termos de uso e Política de privacidade"
        E seleciono a opção "Tenho 18 anos ou mais"
        E clico no botão "Cadastrar"
        Então devo ver uma mensagem de erro indicando que o email já está em uso

        Cenário: Validar campos obrigatórios no formulário de cadastro
          Quando clico na opção "Criar conta"
          E tento enviar o formulário de cadastro sem preencher os campos obrigatórios
          Então devo ver mensagens de erro indicando que os campos obrigatórios precisam ser preenchidos
