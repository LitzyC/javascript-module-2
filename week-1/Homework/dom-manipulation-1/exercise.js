/*document.querySelector('#content').addEventListener('submit', (e) => {
    e.preventDefault()  
})*/

const nodop = document.querySelectorAll("p");
console.log(nodop);

const divlist = document.querySelectorAll("div");
const first = divlist[0];
console.log(first);

const jumbotron = document.querySelector("#jumbotron-text");
console.log(jumbotron);

console.log(document.querySelector(".primary-content").querySelectorAll("p"));

/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let mybuttoncolour = document.querySelector("#bgrChangeBtn");
mybuttoncolour.addEventListener("click", changeColour);

function changeColour() {
    const pagcolor = document.querySelector('body');
    pagcolor.style.backgroundColor = "#7FFFD4";
    //mybuttoncolour.style.backgroundColor = "green";
}



/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

document.querySelector('#addTextBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const text = "New Paragraph"; 
    const p = document.createElement('p');
    p.textContent = text
    
    const articulo = document.querySelector('#mainArticles');
    articulo.appendChild(p);
})



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


document.querySelector('#largerLinksBtn').addEventListener('click', (e) => {
    e.preventDefault()
    const links = document.querySelectorAll('a');
    links.forEach(link=>link.style.fontSize="x-large");
})



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field


document.querySelector('#addArticleBtn').addEventListener('click', (e) => {
    e.preventDefault()

    /*const inputField = document.querySelector('.addArticle')
    const paragraph = document.createElement('p')
    paragraph.innerHTML = inputField.value
    const learnMore = document.querySelector('.heading-underline')
    learnMore.appendChild(paragraph)
    inputField.value = ' '
})*/





/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors = ['#FAAC9B', '#ECFA9B', '#9BFAC0', '#9BD3FA', '#CAA6C6']
let count = 0;

function changeColour(){
    let body = document.querySelector('body');
    body.style.backgroundColor = colors[count];

    if(count < 5){
        count ++;
    }else{
        count = 0;
    }
}
    