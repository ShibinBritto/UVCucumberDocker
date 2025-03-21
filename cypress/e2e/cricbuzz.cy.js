///<reference types='cypress'/>
import _ from 'lodash';
//describe('Cricbuzz_project',()=>{
//beforeEach(() => {
    //cy.visit('https://www.cricbuzz.com/')
// })

xit('ok programe', () => {
    cy.get('[title="Live Cricket Score"]')
      .should('be.visible') // Cypress built-in assertion
      .and('have.attr', 'title', 'Live Cricket Score') // Asserting title attribute
      .click(); // Click the element
      cy.contains('Current Matches').should('have.class','active').and('have.attr','href',"/cricket-match/live-scores")
      
      // Click on "Live Scores" link
    cy.contains('Live Scores').click();

    // Verify that the title is visible
    cy.get('h1.cb-nav-hdr.cb-font-24.line-ht30')
      .should('be.visible') // Implicit assertion
      .and('contain', 'Live Cricket Score'); // Ensures text matches

    // Print title text in the console
    cy.get('h1.cb-nav-hdr.cb-font-24.line-ht30').then(($title) => {
      cy.log('Page Title:', $title.text()); // Logs in Cypress UI
      console.log('Page Title:', $title.text()); // Logs in browser console
    });
  });


xit('run programe', ()=>{
  //cy.get('[class="cb-qck-acs-hdr cb-sign-up-google min-width-fit-con"]').should(HashChangeEvent.toString,'Quick Access')
  cy.origin('https://www.cricbuzz.com/', () => {
    cy.visit('cricket-videos/collection/210/Fantasy-Handbook')
    cy.get('span').contains('Fantasy Handbook')
    // Fails because downloads is not passed in via args
    // cy.contains(downloads)
  })
});

describe('dETEST for FlipKart',()=>{
  xit('d2',()=>{
    cy.visit('https://www.flipkart.com/')
    cy.get('[class="Pke_EE"]').click().type('Laptop Accessories')
  })


    it('Flipkart',()=>{
      cy.visit('https://www.flipkart.com/')
      //cy.get(' div > div >span>span').should("be.visible").should("contain.text", "Kilos",);
      cy.get(' div > div >span>span', { timeout: 10000 }).each(($el, index, $list) => {
        cy.wrap($el).debug().scrollIntoView().should("be.visible");
        cy.log($el.text())
      })
        // cy.get(' div > div >span>span', { timeout: 10000 }).should("be.visible").should("contain.text", "Kilos",);
      //href="/audio-video/headset/pr?sid=0pm%2Cfcn&p%5B%5D=facets.connectivity%255B%255D%3DBluetooth&sort=popularity&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D599&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.headphone_type%255B%255D%3DTrue%2BWireless&param=866&hpid=WqCPtE2MbDEYEbYbttXC1qp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJHcmFiIE5vdyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0c2RFM3V0RKSEdXU0giLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCZXN0IFRydWV3aXJlbGVzcyBIZWFkcGhvbmVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D"
      cy.get('a[href*="/audio-video/headset"]')  // Selects any `<a>` tag containing this href value
  .invoke('attr', 'href')
  .then((link) => {
    cy.log('Extracted URL:', link);
  });
    
      
      cy.get('img[src*="/images/fk-default-image-75ff340b.png?q=90"]')  
      .should('have.attr', 'src')
      .then((src) => {
        cy.log('Navigating to:', src);
        cy.request(src)
        }) // Open the link
      });

      it('Should navigate to Live Scores and verify URL', () => {
        cy.visit('https://www.cricbuzz.com/');
        cy.contains('Live Scores').click();
        cy.url().should('include', '/cricket-match/live-scores');

      });
      it('Flipkart Execution', ()=>{
      cy.visit('https://www.flipkart.com/');
      cy.contains('Cart').click({force: true}); 
      cy.url().should('include','viewcart?exploreMode=true&preference=FLIPKART');
    });
    });
    
    
// cy.get(' div > div >span>span').each(($li) => {
//   cy.wrap($li)


  

    
  //   cy.get('[class="YBLJE4"]').each(($element, index) => {
  //     console.log($element)
  //     console.log(index)

  //     if (index === 3) {  // Since index starts at 0, index 3 is the 4th element
  //         cy.wrap($element).invoke('text').then((text) => {
  //             console.log("The 4th value is:", text.trim());
  //         });
  //     }
  // });



  //   cy.get('[class="_1ch8e__1mZ8pZ"]').should('be.visible');
  //   cy.get('div, span, button').should('be.visible');
  //   cy.get('button').then(($btn) => {
  //     console.log($btn.length); // Prints number of buttons found

  // });
//   cy.get('ul li').each(($li, index) => {
//     cy.log(`Item ${index}: ${$li.textContent}`);
//     console.log($li.textContent)
// });

// cy.get('[class="YBLJE4"]').then(($elements) => {
//   for (let i = 0; i < $elements.length; i++) {
//       cy.wrap($elements[i]).invoke('text').then((text) => {
//           console.log(`Element ${i + 1}:`, text.trim());
//       });
//   }
// });

