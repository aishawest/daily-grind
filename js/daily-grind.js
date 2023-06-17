//alert("can you see this")

/*
Here are the main things we'll likely need to store each coffee:
name- the name of the coffee
pic- pic of coffee 
color- color associated with coffee
alt- the alt tag identifying the coffee 
day- the day of the week
desc- description of coffee 
*/

let myDate = new Date();

let today = myDate.getDay();

//today = 3;

switch(today){

    case 1:
        today = "Monday"; 
            
   break;
      
   case 2:
         today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
   break;
 
   default:
     today = "Not sure what day it is!";


}

    let coffee = {
    name: "Bubble Tea",
    color: "pink",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of Bubble Tea ",
    day: "Monday",
    desc: `I love bubble tea!`
    };


console.log(coffee);