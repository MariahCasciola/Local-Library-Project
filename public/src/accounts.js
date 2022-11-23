function findAccountById(accounts, id) {
  const result = accounts.find((account) => {
    return account.id === id;
  });
  return result;
}

function sortAccountsByLastName(accounts) {
  //we want account.name.last from accounts
  // const sort = accounts.sorted(() => {});
  //return a sorted array
  return accounts.sort((accountA, accountB) => {
    return accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()
      ? 1
      : -1;
  });
}

function getTotalNumberOfBorrows(account = {}, books = []) {
  //forEach (create a counter variable)
  let total = 0;
  //loop through books
  //access borrows
  //access borrows ids that match account ids
  //access account id
  books.forEach((bookObj) => {
    const { borrows } = bookObj;
    borrows.forEach((borrowsObj) => {
      if (account.id === borrowsObj.id) {
        total++;
      }
    });
  });
  //returns a NUMBER that represents the number of times the account's ID appear any book's borrows array
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  //  It returns an array of book objects, including author information,
  return books
    .filter((book) => {
      // that represents all books _currently checked out_ by the given account.
      const recent = book.borrows[0];
      //use a && to check more than one condition
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      //map(find())
      //access author id in books
      const author = authors.find((author) => author.id === book.authorId);
      //return array of books(book) possessed by account,
      return { ...book, author };
    });
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
