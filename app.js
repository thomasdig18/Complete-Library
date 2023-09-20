const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = parseInt(document.getElementById("pages").value);

    var newBook = new Book(title, author, pages);

    if (title === "" || author === "" || pages === "") {
        console.log('error')
    } else {
        myLibrary.push(newBook);
    }

});

function clearLib() {
    myLibrary.length = 0;
}



function displayBook() {
    // Loop Through my Library array and display on card thus displaying on page // 
    // Find out how to only have 1 book per card so that displays by itself // 
    // Remember to be intentional with your time and your actions // 
    // The Devil is randomness // 

}





