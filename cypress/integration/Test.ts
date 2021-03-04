
it('Test1',function(){
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();

    //Implicit Assertion
    cy.get('#query-btn').should('contain','Button');
    cy.get('#query-btn').should('have.id','query-btn');
    cy.get('#query-btn')
            .should('be.visible')
            .should('be.enabled')
            .and('be.enabled');

    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn');

    //Explicit assertion
    let name: string = 'Darshan';
    expect(name).to.be.equals('Darshan');
    assert.equal('Darshan', name, "Not equal");
})

