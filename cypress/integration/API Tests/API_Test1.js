
describe('Test', function(){

    Cypress.config('baseUrl','https://reqres.in/api');

    it('Test1', function(){
        cy.request('GET','https://reqres.in/api/users?page=2')
            .then((response) => {
                expect(response).to.have.property('status',200);
                expect(response.status).to.equal(200);
                expect(response.body.data).to.have.length(6);
            })

        })

    it('Test2', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((response) => {
                expect(response).to.have.property('status', 200);
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page',2);
                expect(response.body.data).to.have.length(6)
            })
    })

    it('Test 3', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Darshan",
                "job": "leader",
                "id": "463",
                "createdAt": "2021-03-04T05:58:31.940Z"
            }

        }).then((response) => {
            expect(response).to.have.property('status',201);
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name','Darshan');
        })
    })

    it('Test4', () => {

        cy.request({
            'method' : 'PUT',
            'url' : '/users/2',
            body: {
                "name": "Dan1",
                "job": "Engineer"
            }
        })
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
        })
    })

    it('Test5', () => {

        cy.request({
            'method' : 'DELETE',
            'url' : '/users/2'
        })
        .then((response) => {
            expect(response).to.have.property('status', 204);
            expect(response.status).to.equal(204);
            expect(response.body).not.to.be.null;
        })
    })
        
    
    

})