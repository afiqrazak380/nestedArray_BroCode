let userName = "Bro";
let inBox = "0";

login();

// displayUserName(); <- this would not work
// displayMassage();  <- this would not work

function login (){
  displayUserName();
  displayMassage();

  function displayUserName(){ // nested function #1
    console.log(`Hello ${userName}, wellcome back`)
  }

  function displayMassage(){ // nested funciton #2
    console.log(`You have ${inBox} massage`)
  }
}

/* Note that the nested function cannot be access independently, 
 unless login() function is invoked */