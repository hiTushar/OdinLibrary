let myLibrary = [];

function Book(title, author, pages, status) { // the constructor
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.status = status; 
}

function addBookToLibrary() {
    let x = new Book('Harry Potter', 'J.K Rowling', 345, false); 
    myLibrary.push(x);
     x = new Book('Harry Potter', 'J.K Rowling', 345, false); 
    myLibrary.push(x);
     x = new Book('Harry Potter', 'J.K Rowling', 345, false); 
    myLibrary.push(x);
     x = new Book('Harry Potter', 'J.K Rowling', 345, false); 
    myLibrary.push(x);
     x = new Book('Harry Potter', 'J.K Rowling', 345, false); 
    myLibrary.push(x);
}

function display(){
    addBookToLibrary(); 
    console.log(myLibrary);
    document.querySelector('main').innerHTML = '';
    for(let book of myLibrary){
        let card = `<div class='card'>
                        <h1 class="title">${book.title}</h1>
                        <p class="data">
                            <span>${book.author}</span>
                            -
                            <span>${book.pages}p</span>
                            <span>${book.status}</span>
                        </p>
                    </div> 
                   `;

        document.querySelector('main').innerHTML += card;

    }
}

display();

/* form modal window */ 
let addButton = document.querySelector('.add_books'); 
let closeForm = document.querySelector('span.close'); 
let modalForm = document.querySelector('.modal');

addButton.onclick = function() {
    modalForm.style.display = 'block'; 
}

closeForm.onclick = function() {
    modalForm.style.display = 'none'; 
}

window.onclick = function(event) {
    if(event.target === modalForm) {
        modalForm.style.display = 'none'; 
    }
}

Array.from(document.querySelectorAll('.modal-body input')).forEach(node => node.onchange = function(event) {
                                                            console.log(event.target.id); 
                                                        }); 