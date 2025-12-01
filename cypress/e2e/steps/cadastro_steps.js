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
    const emailAInserir = dados['E-mail'];

    cy.log(`📧 Email sendo usado: ${emailAInserir}`);
    
    // 1. Nome
    cy.get('#first_name').clear().type(dados['Nome civil ou social']);
    
    // 2. Sobrenome 
    cy.get('#last_name, input[name="last_name"], input[placeholder*="sobrenome"]').clear().type(dados['Sobrenome']);
    
    // 3. Email
    cy.get('#email, input[name="email"]').first().clear().type(emailAInserir);
    
    // 4. Confirmação de Email
    cy.get('#email_confirmation, input[name="email_confirmation"], input[type="email"]').last().clear().type(emailAInserir);
    
    // 5. Senha 
    cy.get('input[type="password"]').eq(0).clear().type(dados['Senha']);
    
    // 6. Confirmação de Senha
    cy.get('input[type="password"]').eq(1).clear().type(dados['Confirme sua senha']);
});


When("preencho todos os campos obrigatórios corretamente, exceto o e-mail com {string}", (emailInvalido) => {
    const nome = 'Teste Formato';
    const senha = 'Lacrei@123';
    
    // 1. Nome
    cy.get('#first_name').clear().type(nome);
    // 2. Sobrenome
    cy.get('#last_name, input[name="last_name"], input[placeholder*="sobrenome"]').clear().type('QA');

    // 3. E-mail
    cy.get('#email, input[name="email"]').first().clear().type(emailInvalido);
    // 4. Confirmação de E-mail
    cy.get('#email_confirmation, input[name="email_confirmation"], input[type="email"]').last().clear().type(emailInvalido);

    // 5. Senha e Confirmação
    cy.get('input[type="password"]').eq(0).clear().type(senha);
    cy.get('input[type="password"]').eq(1).clear().type(senha);

    // 6. Termos
    cy.contains('Li e concordo com os Termos').parent().find('input[type="checkbox"]').check({ force: true });
    cy.contains('Tenho 18 anos ou mais').parent().find('input[type="checkbox"]').check({ force: true });
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

Then("o botão {string} deve permanecer desabilitado", (textoBotao) => {
    cy.contains('button', textoBotao).should('be.disabled');
});

Then("devo ver uma mensagem de erro indicando que o email já está em uso", () => {
    cy.contains(/já existe|já cadastrado|em uso/i).should('be.visible');
});