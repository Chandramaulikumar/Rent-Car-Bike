const fname = document.getElementById('fname-error');
const lname = document.getElementById('lname-error');
const email = document.getElementById('email-error');
const password = document.getElementById('password-error');
const address = document.getElementById('address-error');
const address2 = document.getElementById('address2-error');
const aadhar = document.getElementById('aadhar-error');
const phoneno = document.getElementById('phoneno-error');
const age = document.getElementById('age-error');
const city = document.getElementById('city-error');
const pin = document.getElementById('pin-error');

function FormValidation(){
    if (fnameValidation()){
        return true;
    }
    return false;
}
function fnameValidation(){
    const fname = document.getElementById('firstname');
    if (fname.length < 3){
        fname.innerHTML = "Please Enter Valid First Name";
        return false;
    }else {
        fname.innerHTML = "Valid";
        return true;
    }
}