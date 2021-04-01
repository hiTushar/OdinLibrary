let myLibrary = [];

function Book(title, author, pages, read) { // the constructor
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.status = status; 
}

function addBookToLibrary() {
    let x = new Book('Harry Potter', 'J.K Rowling', 345, false); 
    myLibrary.push(x);
}

function display(){
    addBookToLibrary(); 
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

        document.querySelector('main').innerHTML = card;

    }
}

display();