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
    // const errorIcon = firstName.nextElementSibling;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    if(firstName.value === "" ){
        const err = document.getElementById("nameErrId");
        err.removeAttribute('hidden');
        // firstName.classList.add("fname");
        // errorIcon.style.display = "block";
        // err.textContent = "First name cannot be empty"
        firstName.style.borderColor="red";
          
    }
    
    if(lastName.value === "" ){
        const err1 = document.getElementById("lnameErrId");
        err1.removeAttribute('hidden');
        lastName.style.borderColor="red";
    
    }
    if( ! mailformat.test(email)){
        const err2 = document.getElementById("emailErrId");
        err2.removeAttribute('hidden');
        email.style.borderColor="red";  
        // email.style.value.color="red";   
    
    }
    else if(email.value === ""){
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