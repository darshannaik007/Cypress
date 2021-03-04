
export class LoginPage {

    loginPage_username = '#uname';
    loginPage_password = '#pwd';
    loginPage_loginbtn = '[type="submit"]';

    LoginWithValidCredentials(uname:string, pass:string){
        cy.get(this.loginPage_username).type(uname);
        cy.get(this.loginPage_password).type(pass);
        cy.get(this.loginPage_loginbtn).click();
        cy.contains('Login Successful');
    }

    LoginWithInValidCredentials(uname:string, pass:string){
        cy.get(this.loginPage_username).type(uname);
        cy.get(this.loginPage_password).type(pass);
        cy.get(this.loginPage_loginbtn).click();
        cy.wait(3000);
        cy.on('window:alert', (txt)=>{
            expect(txt).to.be.equal('Wrong Credentials! Try again!');
        })
    }

    navigate(url: string):void {
        cy.visit(url);
    }

    enterUsername(uname: string){
        cy.get(this.loginPage_username).type(uname);
    }

    enterPassword(pass: string){
        cy.get(this.loginPage_password).type(pass);
    }

    Login(){
        cy.get(this.loginPage_loginbtn).click();
    }

}