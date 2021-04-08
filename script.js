

function Book(title, author, pages, status) { // the constructor
    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.status = status; 
}

function saveCollection(libArr) {
    window.localStorage.setItem('collection', JSON.stringify(libArr));
}
function getCollection() {
    return JSON.parse(window.localStorage.getItem('collection')); 
}

function addBookToLibrary(obj) {
    let myLibrary = getCollection() ? getCollection() : []; 
    myLibrary.push(obj); 
    saveCollection(myLibrary); 
}

function display(){
    let myLibrary = getCollection(); 
    document.querySelector('main').innerHTML = '';
    for(let [index, book] of myLibrary.entries()){
        let card = `<div class='card' data-index='${index}'>
                        <h1 class="title">${book.status?'':'*'}${book.title}</h1> <!-- adding * for unfinished book -->
                        <p class="data">
                            <span>${book.author}</span>
                            -
                            <span>${book.pages}p</span>
                        </p>
                        <div>
                            <button id="del">Delete</button>
                            <button class="change_status"></button>
                        </div>
                    </div> 
                   `;
        // document.querySelector('main').innerHTML += card;
        document.querySelector('main').insertAdjacentHTML('beforeend', card);


        if(book.status) { // book is finished i.e. checkbox is checked
            document.querySelector(`div[data-index='${index}']`).className = 'card finished_shadow';
            document.querySelector(`div[data-index='${index}'] button.change_status`).innerText = 'Read Again?'; 
        }
        else {
            document.querySelector(`div[data-index='${index}']`).className = 'card unfinished_shadow';
            document.querySelector(`div[data-index='${index}'] button.change_status`).innerText = 'Finished?'; 
        }  
        document.querySelector(`div[data-index='${index}'] button.change_status`).addEventListener('click', () => {changeStatus(index)});
        

    }
}

function changeStatus(index) { // toggle finished/unfinished status
    
    let myLibrary = getCollection(); 
    let myBook = myLibrary[index]; 
    if(myBook.status) {
        myBook.status = false; 
    }
    else {
        myBook.status = true; 
    }
    saveCollection(myLibrary); 
    display(); 
}


/* form modal window */ 
let addButton = document.querySelector('.add_books'); 
let closeForm = document.querySelector('span.close'); 
let modalForm = document.querySelector('.modal');
let myForm = document.getElementById('formElem'); 

addButton.onclick = function() {
    modalForm.style.display = 'block'; 
    myForm.style.display = 'block'; 
    document.querySelector('.message').style.display = 'none'; 
}

closeForm.onclick = function() {
    modalForm.style.display = 'none'; 
}

window.onclick = function(event) {
    if(event.target === modalForm) {
        modalForm.style.display = 'none'; 
    }
}


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let {title, author, pages, status} = myForm.elements; 

    addBookToLibrary(new Book(title.value, author.value, pages.value, status.checked));
    display();

    e.target.reset(); 
    myForm.style.display = 'none'; 
    document.querySelector('.message').style.display = 'block';

  });
/* form modal window */ 

 


  window.onload = () => display();
 