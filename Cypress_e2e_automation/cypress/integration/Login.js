describe('Testing AgeUp',()=>{
    //to launch the Age up application
    it('Launch AgeUp',()=>
    {
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
it('Login',()=>
   {
       cy.get('.quote-wizard-bottom__first > .mb-24 > .bill-corp').contains('Already have an account?')
       cy.get('[data-testid=BUY_FORSELF_LOGIN]').contains('Log in').click()
       cy.get('.login__sub-header').contains('Log into your AgeUp account')

       //login without input
       cy.get(':nth-child(1) > .field-wrapper__label').contains('Email address')
       cy.get('[data-testid=BUY_FORSELF_LOGIN_EMAIL]')
       cy.get(':nth-child(2) > .field-wrapper__label').contains('Password')
       cy.get('[data-testid=BUY_FORSELF_LOGIN_PASSWORD]')
       cy.get('.text-input__password-show-hide-button')
       cy.get('[data-testid=BUY_FORSELF_LOGIN_BUTTON]').contains('Log in').click()
       cy.get(':nth-child(1) > .field-wrapper__sub-text').contains('Required')
       cy.get(':nth-child(2) > .field-wrapper__sub-text').contains('Required')

       //with input 
       cy.get('[data-testid=BUY_FORSELF_LOGIN_EMAIL]')
       .type('testemail@email.com').should('have.value','testemail@email.com')
       cy.get('[data-testid=BUY_FORSELF_LOGIN_PASSWORD]')
       .type('password').should('have.value','password')
       cy.get('.text-input__password-show-hide-button').contains('SHOW').click()
       cy.get('.text-input__password-show-hide-button').contains('HIDE').click()
       cy.get('[data-testid=BUY_FORSELF_LOGIN_BUTTON]').contains('Log in').click()
       cy.get('.authentication-error').contains('Something went wrong. Please try again.')

       //only email no pwd
       cy.get('[data-testid=BUY_FORSELF_LOGIN_EMAIL]').clear()
       .type('testemail@email.com').should('have.value','testemail@email.com')
       cy.get('[data-testid=BUY_FORSELF_LOGIN_PASSWORD]').clear()
       cy.get('[data-testid=BUY_FORSELF_LOGIN_BUTTON]').contains('Log in').click()
       cy.get(':nth-child(2) > .field-wrapper__sub-text').contains('Required')

       //forgot password //on click is leading to bug
       cy.get('[data-testid=BUY_FORSELF_FORGOT_PASSWORD]')//.click()

       cy.get('.login__form-wrapper > :nth-child(5)').contains("Don't have an account?")
       cy.get('[data-testid=BUY_FORSELF_GET_STARTED]').contains('Get started').click()

       cy.get('.guaranteed-income__left > .get-an-estimate > [data-testid=HOME_GET_ESTIMATE] > .marketing-button')
       .contains('Get an estimate') 
    })
})