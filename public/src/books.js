function findAuthorById(authors, id) {
  //identify authors'  id
  //use find
  return authors.find((author) => {
    return author.id === id;
  });

  //returns and object
}

function findBookById(books, id) {
  return books.find((book) => {
    return book.id === id;
  });
}

function partitionBooksByBorrowedStatus(books = []) {
  //find the bookObj who's returned value is false
  const resultArray1 = books.filter((bookObj) => {
    const isCheckedOut = bookObj.borrows.some((borrowsObj) => {
      return borrowsObj.returned === false;
    });
    return isCheckedOut;
  });
  //find bookObj that are true
  const resultArray2 = books.filter((bookObj) => {
    const isReturned = bookObj.borrows.every((borrowsObj) => {
      return borrowsObj.returned === true;
    });
    return isReturned;
  });
  return [resultArray1, resultArray2];
}

//do now
function getBorrowersForBook(book = {}, accounts = []) {
  //return an array of objects, represents corresponding accounts
  //map()
  //find()
  //loop through borrows array
  const { borrows } = book;
  // console.log(borrows)
  let borrowIDs = borrows.map((borrowsObj) => {
    //loop through the accounts array
    let findAccount = accounts.find((accountObj) => {
      return accountObj.id === borrowsObj.id;
    });
    findAccount.returned = borrowsObj.returned;
    return findAccount;
  });
  return borrowIDs.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
