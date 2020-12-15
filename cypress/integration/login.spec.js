const { Item } = require("semantic-ui-react");
let movies;
import 'commands.js';


Cypress.Commands.add('clickLink', (label) => {
beforeEach(() => {
    cy.visit("http://localhost:3000/login")
});

describe("login",()=>{
    it("should login correctly when correct variables are entered",() => {
        cy.Login()
        // cy.get('#email').type('nfsmanracing@gmail.com')
        // cy.get('#password').type('Testpassword123')
        // cy.get('.btn').click()
        cy.url().should('include','/home')
    });
});
})