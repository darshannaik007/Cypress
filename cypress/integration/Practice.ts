///<reference types="cypress-downloadfile"/>

describe('Test', function(){
    it('Test1', ()=>{
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#fname').type('Darshan');
        cy.get('#lname').type('Naik');
        cy.get('#male').click()
                .should('be.visible');

        cy.get('#option').select('Option 1');
        cy.get('#owc').select(['Option 1','Option 2']);
        cy.get('[name="option2"]').click();
        cy.get('#day').type('1994-12-22');
        cy.get('#quantity').type('5');
        cy.get('textarea').should('have.value','The cat was playing in the garden.');
        cy.get('#myfile').attachFile('users.json');
        cy.get('.btn').click();
        cy.get('[ondblclick="myFunction()"]').dblclick();
        cy.get('#drag1').drag('#div1');
        
    })

    it('MultiTab', ()=>{
        /*Cypress doesn't have support to multi tab because inorder to prevent flicky test(Tests which passes/fails sometimes)
         so cypress modifies the DOM to remove target element from the DOM to prevent opening in new window so that
        it opens in the same window for that it makes use of jquery */
        cy.visit('https://my.naukri.com/account/createaccount?othersrcp=23531&wExp=N&utm_source=google&utm_medium=cpc&utm_campaign=Brand_Login_Register&gclid=Cj0KCQiA7YyCBhD_ARIsALkj54rZYSZYGhG21TjMd6wblvphJUKfq3nrICVu2JDgGBwQIUxioXPgxjYaAj8qEALw_wcB&gclsrc=aw.ds');
        cy.get('[href="//www.naukri.com/termsconditions"]').invoke('removeAttr', 'target').click();
    })
})