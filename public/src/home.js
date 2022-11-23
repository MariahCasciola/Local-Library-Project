function getTotalBooksCount(books) {
  //use .length
  //returns a number, taht respresents the number of book objects inside the array of book objects
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //create an empty counter variable
  let count = 0;
  //loop through the books array forEach()
  books.forEach((bookObj) => {
    const { borrows } = bookObj;
    //look through the borrowers array forEach()
    borrows.forEach((borrowsObj) => {
      //how many times returned is false
      //every time we find a match add to the counter
      if (borrowsObj.returned === false) {
        count++;
      }
    });
  });
  //return the total count
  return count;
}

function getMostCommonGenres(books = []) {
  // - An array of book objects.
  //loop through books
  books.forEach((book) => {
     //access genre names
    const {genre} = book;
    
  });
 
  // if genre names are
  //

  // It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
  // Each object in the returned array has two keys:
  // - The `name` key which represents the name of the genre.
  // - The `count` key which represents the number of times the genre occurs.
  // Even if there is a tie, the array should only contain no more than five objects.
}

// //loop through the books array
// //look at the genre property for each bookObj

// let emptyObjectToPopulate = {};
// books.forEach((bookObj) => {
//   const { genre } = bookObj;
//   //map()?
//   //slice (0,2)  for get top 2 results of something, for get top 5 slice (0,5)
// });
//object.keys(object you are extracting from)
//
// {
//   SCIENCE key : 1
//    CLASSICS key : 1
//    TRAVEL key : 1
//   }
// //check each bookObj to see if the key exists
// if it exists increment by one
//if no exists, create a key and set the value to be 1
//5 objects represent the most common genres
//objects ordered from MOST common to least common

//returns an array containing 5 objects or fewer
//each object will have TWO keys
//NAME, represents the name of the genre
//COUNT, which represent the number of times the genre occus

function getMostPopularBooks(books) {
  //loop through books
  //access borrows
  //loop through borrows
  //
  //how many times has a book been borrowed (how many borrows object return true?)
  //returns an array with top five objects or fewer, the REPRESENTS
}

function getMostPopularAuthors(books, authors) {
  //
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
