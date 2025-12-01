#language: pt

Funcionalidade: Edição de Perfil do usuário
  Como um usuário cadastrado na plataforma Lacrei Saúde
  Quero editar meu perfil de usuário
  Para manter minhas informações atualizadas

  Contexto:
    Dado que estou logada na plataforma Lacrei Saúde

    Cenário: Atualizar dados pessoais e demográficos completos
        Quando acesso a tela de "Seus dados"
        E atualizo o formulário com as seguintes informações:
        | Campo                    | Valor             |
        | Nome civil ou social     | Rodney            |
        | Sobrenome                | Gois              |
        | Data de nascimento       | 14/04/1995        |
        | Seu pronome              | o/Ele/Dele        |
        | Sua etnia                | Parda             |
        | Sua identidade de gênero | Homem Cis         |
        | Sua sexualidade          | Heterossexual     |
        | Sua(s) deficiência(s)    | Não possuo deficiência |
        E clico no botão "Salvar"
        Então os campos devem exibir os novos valores salvos