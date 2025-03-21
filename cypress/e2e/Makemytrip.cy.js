describe("MakeMy Trip ",()=>{
    xit("Extract menu",() =>{
        
        //cy.xpath("//ul[@class='makeFlex font12 headerIconsGap']/li")
       cy.get('[class="headerIconWrapper"]')
         .each(($li,index)=> {
            cy.log('menu ${index + 1} : ${$li.text().trim()}');

        });

    });
    it("checking links",()=>{
        cy.visit("https://www.makemytrip.com/insurance?isRetail=true");

       cy.get("a").each(($link)=>{
        const href=$link.attr("href");
        if(href && !href.startsWith("#")&& !href){
            cy.request(href).then((response)=>{
                expect(response.status).to.be.oneOf([200,301,302]);
            })
        };
       })
    })
});


   
