/// <reference types="cypress"/>
describe('From input',() => {
    it('visit form', () => { 
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    })
    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Wildhan Juniar')
        cy.get('[placeholder ="Email"][type="text"]').type('wildhanjuniar@gmail.com')
        cy.get('.custom-checkbox').first().click()
    })
    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('wildhanjuniar@gmail.com')
        cy.get('#inputPassword2').type('1234567890')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })
    it('Basic Form',() => {
        cy.get('#exampleInputEmail1').type('wildhanjuniar@gmail.com')
        cy.get('#exampleInputPassword1').type('1234567890')
        cy.get('.text').contains('Check me out').click()
    })
    it('Form Without Labels',()=> {
        cy.get('[placeholder="Recipients"]').type('wildhanjuniar@gmail.com')
        cy.get('[placeholder="Subject"]').type('Try PPL')
        cy.get('[placeholder="Message"]').type('Coba aja dulu')
    })
    it('Block Form',()=> {
        cy.get('#inputFirstName').type('Wildhan')
        cy.get('#inputLastName').type('Juniar')
        cy.get('#inputEmail').type('wildhanjuniar@gmail.com')
        cy.get('#inputWebsite').type('www.ntah.com')
    })
    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('wildhanjuniar@gmail.com')
        cy.get('#inputPassword3').type('1234567890')
        cy.get('.custom-checkbox').last().click()
    })
});