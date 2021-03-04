import { LoginPage } from "../pages/login_page";

describe('All the login', function(){

    let obj = new LoginPage();

    beforeEach(function(){
        obj.navigate('https://trytestingthis.netlify.app/');
    })
    //it.only('Login', function(){
    it('Login', function(){
    
        obj.LoginWithValidCredentials('test', 'test');     
    
    })
    
    it.skip('Invalid Login', function(){
    
        obj.LoginWithInValidCredentials('abc','xyz');
    
    })

       

})

