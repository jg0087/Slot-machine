/* GAME : NUMBERS SLOT MACHINE */

/* - 3 NUMBERS SLOT MACHINE

/*FIRST GENERATE RANDOM NUMBERS BETWEEN 1 AND 10 

/*NUMBERS ARE GOING TO BE MY IDS

/*USE THE SPIN FUNCTION AND GENERATE RANDOM NUMBERS

/*SPIN CONTROLLED BY A BUTTON 

/*PLAYER WINS UNTIL ALL 3 NUMBERS ARE THE SAME 


  /*----- constants -----*/


  /*----- state variables -----*/

  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/

  //generates a random number between 1 and 10
function getRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}
// return HTML element by ID 
function getElement(id) {
    return document.getElementById(id);
}
// Generates random numebrs
function spin() {
    const object1 = getElement('object1') ;
    const object2 = getElement('object2') ; 
    const object3 = getElement('object3') ;

    const num1 = getRandomNumber() ;
    const num2 = getRandomNumber() ;
    const num3 = getRandomNumber() ;

    object1.innerHTML = `${num1}`;
    object2.innerHTML = `${num2}`;
    object3.innerHTML = `${num3}`;

   

    if (num1 === num2 && num1 === num3) {
        winnerMessage();
        
    } else {
        hide();
    }
} 
function winnerMessage() {
    const msg  = document.getElementById("message");
    msg.style.display = "block";
    msg.classList.add('animated', 'pulse')
}

function hide() {
    const msg = document.getElementById("message");
    msg.style.display = "none";
}

    