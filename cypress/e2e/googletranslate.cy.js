describe('Google translate language Detection',()=>{


it('Should detect language with input is provided',()=>{

    cy.visit('https://translate.google.com');
    cy.get('textarea[aria-label="Source text"]').type('Hello World',{delay: 100});

    
cy.get('#i15 > .VfPpkd-YVzG2b').should(have.to.be,'Hello World');
});

}
);