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
  // goal: use code as psuedo code
  // populate an array of genreObjs
  const genreObjs = books.reduce(commonGenresHelper, []);
  const sortedGenreObjs = genreObjs.sort((genreObjA, genreObjB) => {
    // sort genres from most common to least common
    return genreObjB.count - genreObjA.count;
  });
  // we will only return the top 5
  return sortedGenreObjs.slice(0, 5);
}

// Callback function to populate genreObjs
function commonGenresHelper(genreObjs, book) {
  const { genre } = book;
  // Check to see if a genreObj with this name exists
  const existingGenreObj = genreObjs.find((genreObj) => {
    return genreObj.name === genre;
  });
  // When there is no existing genreObj w/ that name, we add a new one
  if (!existingGenreObj) {
    // If no match, we create a new genreObj
    const newGenreObj = { name: genre, count: 1 };
    genreObjs.push(newGenreObj);
  } else {
    // If there is a match, we increment that match's count
    existingGenreObj.count++;
  }

  // After each iteration, we will return the genreObjs array that we are trying to populate
  return genreObjs;
}

function getMostPopularBooks(books = []) {
  // return a new array
  //use map, our # of book objects will stay the same
  const newArray = books.map((book) => {
    const { title } = book;
    const { borrows } = book;
    const howManyBorrows = borrows.length;
    return { name: title, count: howManyBorrows };
  });
  const sortednewArray = newArray.sort((countA, countB) => {
    return countB.count - countA.count;
  });
  return sortednewArray.slice(0, 5);
}

function getMostPopularAuthors(books = [], authors = []) {
  const unsortedResult = books.map((bookObj) => {
    const { authorId, borrows } = bookObj;
    const foundAuthor = authors.find((author) => {
      return author.id === authorId;
    });
    return (newObj = {
      name: helperMethod(foundAuthor.name.first, foundAuthor.name.last),
      count: borrows.length,
    });
  });
  const sortedArray = unsortedResult.sort((authorA, authorB) => {
    return authorB.count - authorA.count;
  });
  return sortedArray.slice(0, 5);
}
//note, in your own time try using map and reduce

function helperMethod(first, last) {
  return `${first} ${last}`;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
