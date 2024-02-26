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
    return Math.floor(Math.random() *10) + 1;
}
// return HTML element by ID 
function getElement(id) {
    return document.getElementById(id);
}
// Generates random numebrs
function spin() {
    const item1 = getElement('item1') ;
    const item2 = getElement('item2') ; 
    const item3 = getElement('item3') ;

    const num1 = getRandomNumber() ;
    const num2 = getRandomNumber() ;
    const num3 = getRandomNumber() ;

    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;

    if (num1 === num2 && num1 === num3) {
        jackpotMessage() ;
        
    } else {
        tryAgain();
    }
}

    function jackpotMessage() {
        const message = document.getElementById('message');
        message.jackpotMessage();
    }
    function tryAgain() {
        const again = document.getElementById('again') ;
        
    }