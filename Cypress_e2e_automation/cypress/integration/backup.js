describe('Testing AgeUp',()=>{
    //to launch the Age up application
    it('Launch AgeUp',()=>{
        cy.visit('https://age-up.com/getstarted/init/')
    })
        it('Step 1 header',()=>
        {
        cy.get('.header__step').contains('Step 1: Get started')
        /* cy.get('.header__progress-bar')
        cy.get('.header__current-progress-color') */
        cy.get('[data-testid=BUY_FORSELF_HEADER_HELP]').contains('Help')
        //cy.get('[data-testid=BUY_FORSELF_HEADER_HELP]').click()
        cy.get('[data-testid=BUY_FORSELF_HEADER_CALL]').contains('Schedule a call')
    })
    it('Step 1 Body',()=>
    {
        cy.get('.get-started__headline > h4.bill-corp').contains('Get started')
        cy.get('h2.bill-corp').contains('Guaranteed income for life after 90')
        cy.get('.get-started__headline > p').contains('AgeUp is an affordable way to help fill in the financial gaps that come with a long life.')
        cy.get(':nth-child(2) > .field-wrapper__label').contains('Who is this for?')
        cy.get(':nth-child(1) > .tile').contains('Me')
        
        cy.get('form > :nth-child(2) > a').contains('Someone else').click()
        cy.get(':nth-child(6) > .tile').contains('Grandmother')
       // cy.get('.tile-group > .grid').find('tr')
        
        cy.get('form > :nth-child(2) > a').contains('Hide options').click()
        //Zipcode
        cy.get(':nth-child(3) > .field-wrapper__label').contains('What’s your ZIP code?')
        //Invalid Zip and Next triggers required validation
        cy.get('[data-testid=BUY_FORSELF_ZIPCODE]')
        .type('abcd?e').should('have.value', '')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.field-wrapper__sub-text').contains('Required')
        //Valid Zip but AgeUp unavailable currently
        cy.get('[data-testid=BUY_FORSELF_ZIPCODE]').clear()
        cy.get('[data-testid=BUY_FORSELF_ZIPCODE]')
        .type('02101').should('have.value', '02101')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()

        //'Sorry! We don’t recognize that ZIP code' window opens. Click cancel and close
        cy.get('.modal__buttons > .css-ol0t3g').contains('Cancel').click()

        //Again give Next with the same zipcode 02101
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        //Submit child window without input
        cy.get('.modal__buttons > .css-hm1oh1').contains('Submit').click()
        cy.get('.modal > .bill-corp').contains('You’re on the list!')
        //Click close
        cy.get('.modal__x > .svg-inline--fa').click()
        //Click on See where AgeUp is currently available link
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.contains('See where AgeUp is currently available').click()
        //AgeUp available locations window click on okay got it, closes the child windows and load Step 1 with data
        cy.get('.modal__buttons > .css-ol0t3g').contains('Okay, got it!').click()
        //Submit child window without input and click Head to ageup, redirects to AgeUp home. Allows to submit
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.modal__buttons > .css-hm1oh1').contains('Submit').click()
        cy.get('.modal > .bill-corp').contains('You’re on the list!')
        cy.get('.modal__x > .svg-inline--fa').click()
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        //Submit child window with input for FN, LN, Email
        cy.get('.grid > :nth-child(1) > .field-wrapper > .field-wrapper__label').contains('First name')
        cy.get('[data-testid=BUY_FORSELF_WAITLIST_FNAME]')
        .type('Oscar').should('have.value','Oscar')
        cy.get(':nth-child(2) > .field-wrapper > .field-wrapper__label').contains('Last name')
        cy.get('[data-testid=BUY_FORSELF_WAITLIST_LNAME]')
        .type('Harpert').should('have.value','Harpert')
        cy.get('.grid-item--md-span-2 > .field-wrapper > .field-wrapper__label').contains('Email')
        cy.get('[data-testid=BUY_FORSELF_WAITLIST_EMAIL]')
        .type('testemail@email.com').should('have.value','testemail@email.com')
        cy.get('.modal__buttons > .css-hm1oh1').contains('Submit').click()
        cy.get('.modal > .bill-corp').contains('You’re on the list!')
        cy.get('[data-testid=BUY_FORSELF_HEAD_TO_AGEUP] > .css-hm1oh1').click()
        cy.get('.guaranteed-income__left > .get-an-estimate > [data-testid=HOME_GET_ESTIMATE] > .marketing-button')
        .contains('Get an estimate')
        .click() 
        //giving valid AgeUp available Zip
        cy.get('[data-testid=HOME_QUOTE_FOR_SELF]')
        .contains('For me')  
        .click() 
        cy.get(':nth-child(2) > .mb-24 > .bill-corp').contains('Want more info?')
        cy.get('[data-testid=BUY_FORSELF_GET_PRODUCT_GUIDE]').contains('Get the product guide').click()
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
        //input 
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
        //forgot password

        cy.get('.login__form-wrapper > :nth-child(5)').contains("Don't have an account?")
        cy.get('[data-testid=BUY_FORSELF_GET_STARTED]').contains('Get started').click()

        cy.get('.guaranteed-income__left > .get-an-estimate > [data-testid=HOME_GET_ESTIMATE] > .marketing-button')
        .contains('Get an estimate')
        .click() 
        //giving valid AgeUp available Zip
        cy.get('[data-testid=HOME_QUOTE_FOR_SELF]')
        .contains('For me')  
        .click() 
        //footer
        //temp comment later uncomment        
        
       /*  cy.get('[data-testid=BUY_FORSELF_PRIVACY_POLICY]').contains('Privacy policy').click()
        cy.get('[data-testid=BUY_FORSELF_TERMS]').contains('Terms of use').click()
        cy.get('[data-testid=BUY_FORSELF_SOCIAL_GUIDELINES]').contains('Social media guidelines').click() */

        cy.get('[data-testid=BUY_FORSELF_ZIPCODE]').clear()
        cy.get('[data-testid=BUY_FORSELF_ZIPCODE]')
        .type('60173').should('have.value', '60173')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        //.url()
        //.should('include','https://age-up.com/getstarted/age/')
    })
     it('Step 2 of 8: About you',() =>
    {
        cy.get('.header__step').contains('Step 2 of 8: About you')
        cy.get('[data-testid=BUY_FORSELF_BACK_BUTTON]').contains('Back').click()
        cy.get('.header__step').contains('Step 1: Get started')
        cy.get('[data-testid=BUY_FORSELF_ZIPCODE]')
        .should('have.value', '60173')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.header__step').contains('Step 2 of 8: About you')
        cy.get('.bill-corp').contains('Great! Let’s get to know you better.')
        cy.get('.field-wrapper__label').contains('What’s your gender?')
        cy.get('[data-testid=BUY_FORSELF_GENDER_MALE]').contains('Male')//.click()
        //tooltip
        cy.get('.text-with-popover').contains('Why does this matter?')
        //cy.get('.text-with-popover')//.onmouseover()
        //.contains('Because women live longer than men on average, gender is a pricing factor when calculating guaranteed future income.')
    
        //Choose Female
        cy.get('[data-testid=BUY_FORSELF_GENDER_FEMALE]').contains('Female').click()
    })
        //Goes to Step 3 of 8 About you
    it('Step 3 of 8 Birthdate',()=>
    {
        cy.get('.bill-corp').contains('When were you born?')
        cy.get('.gender-stat > :nth-child(2)')
        .contains('Did you know: A 65-year old woman alive today has a 34% chance of living past 90.1')
        cy.get('.field-wrapper__label').contains('Date of birth')
        cy.get('[data-testid=BUY_FORSELF_DOB]')//DOBIP
        //no input click next and required alert
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.field-wrapper__sub-text').contains('Required')
        //givevaliddob        
        cy.get('[data-testid=BUY_FORSELF_DOB]')
        .type('12231958').should('have.value','12/23/1958')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()   
        //goes to step 4
        cy.get('.header__step').contains('Step 4 of 8: Target age')
    }) 
    it('Step 4 of 8',()=>
    {
        cy.get('.field-wrapper__label')
        .contains('Before continuing, see what happens when you change the target payout age')
        cy.get(':nth-child(1) > .tile').contains('91')
        cy.get(':nth-child(2) > .tile').contains('95')
        cy.get(':nth-child(3) > .tile').contains('97')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.header__step').contains('Step 5 of 8: Plan for possibilities')
        
        //Go back and change input by clicking 97
        cy.get('[data-testid=BUY_FORSELF_BACK_BUTTON]').click()
        cy.get(':nth-child(3) > .tile').contains('97').click()
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
    })
    it('Step 5 of 8: Plan for possibilities',()=>
    {
        //no selection throw alert
        cy.get('.field-wrapper__label').contains('What would you like to happen to the money?')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').click()
        cy.get('.field-wrapper__sub-text').contains('Required')
        //link
        cy.get('[data-testid=BUY_FORSELF_LEARN_MORE]').contains('Learn more').click()
        cy.get('.x-button > .svg-inline--fa > path').click() //to close learn more window
        //make selection
        cy.get('[data-testid=BUY_FORSELF_ROP_NO]').contains('No return, but get larger payouts')
        cy.get('[data-testid=BUY_FORSELF_ROP_YES]')
        .contains('Return all premiums to beneficiary, but get smaller payouts').click()
        cy.get('[data-testid=BUY_FORSELF_NEXT]').click()
        //goes to next step
    })
    it('Step 6 of 8: Get an estimate',()=>
    {
        cy.get('.header__step').contains('Step 6 of 8: Get an estimate')
        cy.get('.bill-corp').contains('Almost there!')
    })
        //goes to step 3
       /*  it('Step 3 of 8: About you',() =>
    {
        cy.get('.header__step').contains('Step 3 of 8: Birthdate')
        cy.get('[data-testid=BUY_FORSELF_BACK_BUTTON]').contains('Back').click()
        cy.get('.header__step').contains('Step 2 of 8: About you')
        cy.get('[data-testid=BUY_FORSELF_GENDER_FEMALE]')
        .should('have.value', 'Female')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.header__step').contains('Step 3 of 8: Birthdate')
        cy.get('.bill-corp').contains('When were you born?')
        cy.get('.gender-stat > :nth-child(2)')
        .contains('Did you know: A 65-year old woman alive today has a 34% chance of living past 90.1')
        cy.get('.field-wrapper__label').contains('Date of birth')
        cy.get('[data-testid=BUY_FORSELF_DOB]')//DOBIP
        //no input click next
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.field-wrapper__sub-text').contains('Required')
        //text below DOB and link
        cy.get('.birthdate__field-under-sub-text')
        .contains('AgeUp is available for purchase between the ages of 50-75. Not quite there yet? Get AgeUp for your parent or other loved one.')
        cy.get('[data-testid=BUY_FORSELF_SOMEONE_ELSE]').click()
        cy.get('.header__step').contains('Step 1: Get started')
        cy.get(':nth-child(2) > .tile').contains('Mother')
        cy.get('[data-testid=BUY_FORSELF_ZIPCODE]')
        .should('have.value', '60173')
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.header__step').contains('Step 2 of 7: Age')
        cy.get('.bill-corp').contains('Great! Let’s get to know your mother better.')
        cy.get('.field-wrapper__label').contains("What's your mother's age?")
        cy.get('#age')//input
        cy.get('.age__field-under-sub-text').contains('AgeUp is available for loved ones between the ages of 50-75. If your mother is past 75, you may be able to get AgeUp for another loved one or for yourself.')
        cy.get('.age__field-under-sub-text > a')//.click()      
        cy.get('[data-testid=BUY_FORSELF_NEXT]').contains('Next').click()
        cy.get('.field-wrapper__sub-text').contains('Required')        
    }) */
    
})