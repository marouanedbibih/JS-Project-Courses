let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirme = document.querySelector('#confirme');
let form = document.querySelector('#sing-up');
const togglePassword = document.querySelector('#togglePassword');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirm();
    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
    if (isFormValid) {
    }
});
// error and success function
const setError = (input,message) =>{
    const element = input.parentElement;
    element.classList.remove("success");
    element.classList.add("error");
    const small = element.querySelector("small");
    small.textContent = message;
}
const setSuccess = (input,message) =>{
    const element = input.parentElement;
    element.classList.remove("error");
    element.classList.add("success");
    const small = element.querySelector("small");
    small.textContent = "";
}
// validate functions
const isEmpty = (value) =>{
    if(value ===""){
        return false;
    }
    else{
        return true;
    }
}
const isBetween = (length,min,max) =>{
    if(length < min || length > max){
        return false;
    }
    else{
        return true;
    }
}
const isEmailValidate = (value) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}
const isPasswordValidate = (value) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(value);
};
// check functions
const checkUsername = () =>{
    let user = username.value.trim();
    const min = 3 , max = 25;
    let E = isEmpty(user);
    console.log(E);
    let B = isBetween(user.length,min,max);
    console.log(B);
    let valid = false;
    if(E === false){
        setError(username,"Username cannot be blank.");
    }
    else if(B === false){
        setError(username,`Username must be between ${min} and ${max} characters.`);
    }
    else{
        setSuccess(username)
        valid = true;
    }
    return valid;
}
const checkEmail = () => {
    let eml= email.value.trim();
    let E = isEmpty(eml);
    console.log(E);
    let EV = isEmailValidate(eml);
    console.log(EV);
    let valid = false;
    if(E === false){
        setError(email,"Email cannot be blank.");
    }
    else if(EV === false){
        setError(email, 'Email is not valid.');
    }
    else{
        setSuccess(email);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {
    let passwd= password.value.trim();
    let P = isEmpty(passwd);
    console.log(P);
    let PV = isPasswordValidate(passwd);
    console.log(PV);
    let valid = false;
    if(P === false){
        setError(password,"Email cannot be blank.");
    }
    else if(PV === false){
        setError(password,'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    }
    else{
        setSuccess(password);
        valid = true;
    }
    return valid;
}
const checkConfirm = () => {
    let passwd = password.value.trim();
    let conf = confirme.value.trim();
    let C = isEmpty(conf);
    console.log(C);
    let valid = false;
    if(C === false){
        setError(confirme,"Please enter the password again");
    }
    else if( passwd !== conf){
        setError(confirme,'Confirm password does not match');
    }
    else{
        setSuccess(confirme);
        valid = true;
    }
    return valid;
}
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    confirme.setAttribute('type',type);
    this.classList.toggle('bi-eye');
});