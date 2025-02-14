/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

let content = document.querySelector("#content");

function exerciseOne(arrayOfPeople) {
  //For Each, entrar a la array y mostrarlo.
  arrayOfPeople.forEach(element => {
    //variables creando el encabezado
    let huno = document.createElement('h1');
    let hdos = document.createElement('h2');
    //TextContext asignar al encabezado que creamos.
    huno.textContent = element.name;
    hdos.textContent = element.job;
    //Muestra de lo creado
    content.appendChild(huno);
    content.appendChild(hdos);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
  //Limpiar o vaciar la pagina.
  //content.innerHTML=""
  let list = document.createElement('ul');
  content.appendChild(list);
  
  // let label = document.createElement('label');
  // content.appendChild(label);
  // label.innerText = "Hola";
  
  shopping.forEach(libro => {
    let newLI = document.createElement("li");
    newLI.innerText = libro;
    list.appendChild(newLI);
  })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  let lista = document.createElement('ul');
  content.appendChild(lista);

  //    PUNTO 1
  // books.forEach(element => {
    //   //variables creando el parrafo
    //   let paragraph = document.createElement('p');
    
    //   //TextContext asignar al encabezado que creamos.
    //   paragraph.textContent = element.title + "  -  " +element.author;
    
    //   //Muestra de lo creado
    //   content.appendChild(paragraph);
    // });
    
  books.forEach(libro =>{
    let li = document.createElement('li');
    li.innerText = "\n" + libro.title + "  -  " + libro.author + "\n";
    lista.appendChild(li);
    
    let imagen = document.createElement('img');
    imagen.src="../Part-1/images/" + libro.title + ".jpeg";
    imagen.style.marginLeft = "45%";
    imagen.style.marginTop = "1px";
    imagen.style.marginBottom = "10px";
    li.appendChild(imagen); 
    
    if (libro.alreadyRead === true){
      li.style.backgroundColor = "green";
    }else if (libro.alreadyRead === false){
      li.style.backgroundColor = "red";
    }

  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
