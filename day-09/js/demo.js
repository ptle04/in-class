'use strict';

// use querySelector and css selectors to get the none.css href
// log it




//select h1 and modify it's font-size
let h1 = document.querySelector('h1');
h1.style.fontSize = "5em";
h1.addEventListener('click', function() {
    h1.style.fontSize = "5em";
    console.log("you clicked the h1");
})




//add event listener to the button to track x and y of clicks
//log them
//log the target
let button = document.querySelector('.clickMe');
button.addEventListener('click', function(event) {
    let message = "You clicked on " + event.offsetX + " and " + event.offsetY;

    let clickedElement = event.target;
    clickedElement.style.fontSize = "2em";

    console.log(message);
    console.log(clickedElement);
    
})

let button2 = document.querySelector('.clickAgain');
button2.addEventListener('click', function(event) {
    let message = "You clicked on " + event.offsetX + " and " + event.offsetY;

    let clickedElement = event.target;
    clickedElement.style.fontSize = "2em";

    console.log(message);
    console.log(clickedElement);
    
})


//key press event listener
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        console.log("Going up!")
    }else if(event.key == 'ArrowDown'){
        console.log("Arrow Down!");
    }

});



//get all style sheet links, log them, then add even listeners to each




// track state of clicks
