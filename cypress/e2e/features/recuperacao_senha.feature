#language: pt

Funcionalidade: Recuperação de Senha
  Como uma pessoa usuária que esqueceu suas credenciais
  Quero redefinir minha senha de acesso
  Para voltar a utilizar a plataforma Lacrei Saúde

  Contexto:
    Dado que estou na página de Login

  Cenário: Solicitar link de redefinição de senha com sucesso
    Quando clico no link "Esqueci minha senha"
    E sou direcionado para a tela de recuperação
    E insiro meu email cadastrado "rodneygoisofc@email.com"
    E clico no botão "Enviar link"
    Então devo visualizar uma mensagem de confirmação "Verifique seu e-mail para redefinir a senha"
    E um botão "Voltar para a tela inicial"para retornar ao Login deve estar disponível
    
  Cenário: Validação de formato de e-mail inválido
    Quando clico no link "Esqueci minha senha"
    E insiro um formato de email inválido "rodney.sem.arroba"
    Então o botão "Enviar link" deve permanecer desabilitado
    E devo ver a mensagem de orientação "Por favor, utilize um formato de e-mail válido. Por exemplo: email@dominio.com.br"

  Cenário: Voltar para o Login
    Quando clico no link "Esqueci minha senha"
    E decido não recuperar e clico em "Voltar"
    Então devo ser redirecionado novamente para a tela de Login