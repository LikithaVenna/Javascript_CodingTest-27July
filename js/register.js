'use strict'
let btn=document.getElementById('submit')

function onBtnClick(){
    let userName = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pass').value
    let confirmPassword = document.getElementById('confirmpass').value
    if(userName.value=='NULL' || userName.value.length<=3){
        div.innerHTML = 'Username must be atleast 3 characters'
    }
    let emaiformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$;
    if(email!=null)
    {
        if(email.value.match(emailformat)){
            return true;
        }else{
            div.innerHTML = 'Email is not valid'
        }
    }
    if(password==null || password.length<=6){
        div.innerHTML = 'Password must be atleast 6 characters'
    }
    if(confirmPassword!=null || confirmPassword!=password){
        div.innerHTML = 'Password2 is required'
    }
}
btnsubmit.addEvenListener('click',onBtnClick)