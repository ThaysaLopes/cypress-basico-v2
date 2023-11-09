Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Thaysa')
    cy.get('#lastName').type('Lopes')
    cy.get('#email').type('thaysa.exemplo@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})