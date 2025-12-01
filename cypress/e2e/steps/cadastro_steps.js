import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let emailCadastrado;


Given("que estou na página inicial da Lacrei Saúde", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});


When("clico na opção {string}", (textoBotao) => {
  cy.contains(textoBotao).click();
});

When("preencho o formulário de cadastro com:", (dataTable) => {
  const dados = dataTable.rowsHash();

  const idAleatorio = Date.now();
  const emailDinamico = `rodney.teste+${idAleatorio}@gmail.com`;

  cy.log(`📧 Email gerado para este teste: ${emailDinamico}`);

  cy.get('#first_name').clear().type(dados['Nome civil ou social']);

  cy.get('#last_name, input[name="last_name"], input[placeholder*="sobrenome"]').clear().type(dados['Sobrenome']);

  cy.get('#email, input[name="email"]').first().clear().type(emailDinamico);

  cy.get('#email_confirmation, input[name="email_confirmation"], input[type="email"]').last().clear().type(emailDinamico);

  cy.get('input[type="password"]').eq(0).clear().type(dados['Senha']);

  cy.get('input[type="password"]').eq(1).clear().type(dados['Confirme sua senha']);
});

When("seleciono a opção {string}", (textoOpcao) => {
  cy.contains(textoOpcao).parent().find('input[type="checkbox"]').check({ force: true });
});

When("clico no botão {string}", (textoBotao) => {
  cy.contains('button', textoBotao).click({ force: true });
});

When("tento enviar o formulário de cadastro sem preencher os campos obrigatórios", function () {
  cy.contains('button', 'Cadastrar').click({ force: true });
});


Then("devo ser redirecionado automaticamente para a tela de Login", () => {
  cy.url({ timeout: 10000 }).should('include', 'login');
});

Then("devo ver uma mensagem informativa para verificar meu e-mail", () => {
  cy.contains(/sucesso|verifique|email/i).should('be.visible');
});

Then("devo ver mensagens de erro indicando que os campos obrigatórios precisam ser preenchidos", () => {
  cy.contains(/obrigatório|campo requerido|precisa ser preenchido/i, { timeout: 6000 }).should('be.visible');
});

Then("devo ver uma mensagem de erro indicando que o email já está em uso", () => {
  cy.contains(/já existe|já cadastrado|em uso/i).should('be.visible');
});