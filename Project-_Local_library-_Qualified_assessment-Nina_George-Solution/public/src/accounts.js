function findAccountById(accounts, id) {
  let found=accounts.find((account)=> account.id===id);
  return found;
  
}

function sortAccountsByLastName(accounts) {
  accounts.sort((a, b) => {if (a.name.last > b.name.last) return 1;
   if (a.name.last < b.name.last) return -1; 
    return 0;                       
});
  return accounts;              
}

//: find(), filter(), map(), and reduce().
//one helper function.
// the ternary operator, the spread operator, object shorthand, array or object destructuring, and for/in loops
// (true or false)? 1 : 2;
function getTotalNumberOfBorrows(account, books) {
  console.log ("foo",books[0],account)
  let totalNumberOfBorrows = 0;  
  for (let i = 0; i < books.length; i++) { 
     console.log ("foo",books[i].id,account.id)
    if (books[i].id === account.id) {
   // totalNumberOfBorrows++; } 
      console.log ("foo2",books[i])
      return books[i].borrows.length;}
  }
  return 2;
 // return totalNumberOfBorrows;

}

function getBooksPossessedByAccount(account, books, authors) {
 let checkedOutBooks = books.filter((book) => 
  book.borrows[0].returned === false && book.borrows[0].id === account.id);

 
  
  let checkedOutBooksWithAuthor = checkedOutBooks.map((book) => {
    let  author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
  
  return checkedOutBooksWithAuthor;
  
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
