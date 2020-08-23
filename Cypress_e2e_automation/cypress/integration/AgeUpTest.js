describe('Testing AgeUp',()=>{
    //to launch the Age up application
    it('Launch AgeUp',()=>{
        cy.visit('https://age-up.com/')
    })
    //Get an estimate "For me"
    //to find the button and check if the Get an estimate button has the label 'Get an Estimate'
     it('Click on Get Estimate',()=>{
        cy.get('.guaranteed-income__left > .get-an-estimate > [data-testid=HOME_GET_ESTIMATE] > .marketing-button > .button-content')
        .contains('Get an estimate')  
        //to check if on click For me is available 
        .click() 
        cy.get('[data-testid=HOME_QUOTE_FOR_SELF]')
        .contains('For me')  
        //to check on clicking for me it goes to next page which is step 1
        .click() 
        .url()
        .should('include','https://age-up.com/getstarted/init/')
    })
   // it('logo',()=>{cy.get('.header__logo-svg').describe('logo')})
   
   it('Step 1 header',()=>
   {
   cy.get('.header__step').contains('Step 1: Get started')
   /* cy.get('.header__progress-bar')
   cy.get('.header__current-progress-color') */
   cy.get('[data-testid=BUY_FORSELF_HEADER_HELP]').contains('Help')
   cy.get('[data-testid=BUY_FORSELF_HEADER_HELP]').click()
    cy.location('pathname').should('include', 'learn.age')
    //cy.contains('FAQs')
   //cy.url().should('include','https://learn.age-up.com/')
   //cy.get('[data-testid=BUY_FORSELF_HEADER_CALL]').contains('Schedule a call')
   //.click().url().should('include','https://justcall.io/calendar/ageup')
    })
    it('Step 1 Body',()=>
    {
        cy.get('.get-started__headline > h4.bill-corp').contains('Get started')
        cy.get('h2.bill-corp').contains('Guaranteed income for life after 90')
        cy.get('.get-started__headline > p').contains('AgeUp is an affordable way to help fill in the financial gaps that come with a long life.')
        cy.get(':nth-child(2) > .field-wrapper__label').contains('Who is this for?')

    })
})
