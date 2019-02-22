// Declarations
const AddBtn = document.getElementById('addbtn');
AddBtn.addEventListener("click", addBookToLibrary);
let myLibrary = [];
let node = document.querySelector("#library");

// Constructor function for Book objects
function Book (title, author, pages, read){
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function () {
		return info = `${title} by ${author}, ${pages} pages, ${read}`;
	}
}
// Add book entry to array and render to page
function addBookToLibrary() {
	
	// Get values from user input
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	let read = document.getElementById('read').value;
	
	// Add entered book as new Book object
	let newbook = new Book(title, author, pages, read);
	// Add new book to Library array
	myLibrary.push(newbook);
	// Clear node
	node.innerHTML = "";

	// Adding book entries to the page with render method   
		myLibrary.forEach(function(element, index){
		let template = 
									`<div id="book-card" data-card-id="${index}">
											<div id="card-title">${element.title}</div>
											<div>By: ${element.author}</div>
											<div>Pages: ${element.pages}</div>
											<div>Read: ${element.read}</div>
											<button data-button-id="${index}" id="deletebtn">Delete book</button>
										</div>`;

	
				let render = function (template, node) {
				node.innerHTML += template;
		}
				render(template, document.querySelector('#library'));
		});
		const DelBtn = document.getElementById('deletebtn');
		DelBtn.addEventListener("click", deleteBook);
		
	// Clear text input fields after each entry
	document.getElementById('title').value = "";
	document.getElementById('author').value = "";
	document.getElementById('pages').value = "";
	document.getElementById('read').value = "";
	
}
	function deleteBook() {
				let databutton = document.querySelector('#deletebtn');
				let databuttonIndex = databutton.dataset.buttonId;
				//console.log(databuttonIndex);
				
				myLibrary.forEach(function(element, index, currentValue){
					if (index == databuttonIndex) {
				//console.log(index);
				//console.log(databuttonIndex);
				
				let bookcard = document.querySelector('#book-card');
				let bookid = bookcard.dataset.cardId;
				if (bookid == index) {
					bookcard.remove();
					myLibrary.splice(`${index}`, 1);
					}
				}
			});
		}
	
		
	/*
	let data = document.querySelectorAll("[data-id]").value;
	console.log(data);
		let databutton = document.querySelectorAll("[data-button-id]").value;
	console.log(databutton);
	
			myLibrary.forEach(function(element, index, currentValue){
				if (index == data) {
					let data = document.querySelectorAll("[data-id]").value;
					let databutton = document.querySelectorAll("[data-button-id]").value;
					console.log(`Index = ${currentValue}`);
					console.log(`data-id = ${data}`);
					console.log(`data-button-id = ${databutton}`);
				}
					});
	}
	
	*/
	


