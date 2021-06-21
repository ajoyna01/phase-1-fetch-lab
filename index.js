function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  //function needs to get the 5th book
    .then(resp => resp.json())
    .then(json => renderBooks(json));
   
    
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const h1 = document.createElement('h1');
    h1.innerText = book.character;
    h2.innerText = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
