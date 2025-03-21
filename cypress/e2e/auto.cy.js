///<reference types='cypress'/>

describe('login page check',() =>{
    it('check desribe is fine',() => {
        //cy.visit('http://localhost:4000/');
        //cy.visit('/accounts/123')
//cy.wait(alias: string, options?: Partial<WaitOptions>): Cypress.Chainable<Interception<any, any>>
//Name of the alias to wait for.
// Wait for the route aliased as 'getAccount' to respond
// without changing or stubbing its response
//cy.intercept('http://localhost:3000/api/auth/getme*').as('getme')
cy.visit('http://localhost:4000/');
cy.get('#email').type('admin@gmail.com')
cy.get('#\:r3\:').type('Admin@123')
cy.get('#\:r5\:').click();
//cy.visit('/accounts/123')
//cy.wait('getme').then((interception) => {
// we can now access the low level request
// that contains the request body,
// response body, status, etc

   // });
});

});