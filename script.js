// const firstName = document.getElementById("fname").value;
// const lastName = document.getElementById("lname").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("pass").value;
const submit = document.getElementById("btn1");




function validate(e){
    e.preventDefault();
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    if(firstName.value === "" ){
        const err = document.getElementById("nameErrId");
        err.removeAttribute('hidden');
        firstName.style.borderColor="red";
          
    }
    if(lastName.value === "" ){
        const err1 = document.getElementById("lnameErrId");
        err1.removeAttribute('hidden');
        lastName.style.borderColor="red";
    
    }
    if(email.value === "" ){
        const err2 = document.getElementById("emailErrId");
        err2.removeAttribute('hidden');
        email.style.borderColor="red";
    
    }
    if(password.value === "" ){
        const err3 = document.getElementById("passErrId");
        err3.removeAttribute('hidden');
        password.style.borderColor="red";
    
    }

}

// submit.addEventListener("click" , validate);
submit.addEventListener("click", validate); 
// console.log("Hellow there!" + submit);