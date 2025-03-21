///<reference types='cypress'/>

//✅ Wrap a product price and perform calculations

// Get the price of an iPhone, wrap it in a Cypress chain, and verify it's above ₹50,000.
// Commands: cy.wrap(), should(), invoke(), then()



// describe('E2E_Testing',()=>{
//     it('verifyIphone Price',()=>{
// cy.visit('https://www.flipkart.com/');
// cy.get('[placeholder="Search for Products, Brands and More"]').click().type('iphone');
// cy.get('[type="submit"]').click()
// cy.get('[class="yKfJKb row"]').each(($el,$index,$list) =>{
// cy.wrap($el).within(()=>{
//     const amount=""

// })
// })

//     })
// })

describe('E2E_Testing', () => {
    it('Find All iPhones', () => {
        cy.visit('https://www.flipkart.com/');
        cy.get('[placeholder="Search for Products, Brands and More"]').type('iphone');
        cy.get('[type="submit"]').click();

        // Capture and print all iPhone names
        cy.get('[class="yKfJKb row"]').each(($el, index) => {
            cy.log(`iPhone ${index + 1}: `, $el.text());
            console.log(`iPhone ${index + 1}: `, $el.text());

                cy.get('[class="yKfJKb row"]').each(($el) => {
                    let productName = $el.text();
                    let details = productName.split(' '); // Splitting name by spaces
                    let model = `${details[0]} ${details[1]}`; // Extract "Apple iPhone 14"
                    let rom = details.find((word) => word.includes('GB')); // Extract ROM
            
                    cy.log(`Model: ${model}, ROM: ${rom}`);
                    console.log(`Model: ${model}, ROM: ${rom}`);
                });
        });
    });
});
