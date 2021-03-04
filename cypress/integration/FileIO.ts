///<reference types="cypress-downloadfile"/>

describe('File', function(){

    
    it('File', function(){
        cy.fixture('example.json')
            .its('name').should('eq', 'Using fixtures to represent data');
            
        cy.readFile('./cypress/fixtures/example.json').its('name').should('eq','Using fixtures to represent data');
        cy.writeFile('sample.txt','Hello World');

    })

    it('File upload', function(){
        cy.visit('https://filebin.net/');
        cy.get('#fileField').attachFile('sample.txt');
        
    })

    it('File Download', function(){
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg');
    })
    
})