function getTotalBooksCount(books) {
   return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
return books.reduce((total, book) => {
    return total + book.borrows.filter(notReturned => notReturned.returned === false).length;
  }, 0);
}

function getMostCommonGenres(books) {
let map = {};
  books.forEach(num => {
    if (map[num.genre]) {
    map[num.genre]++;
    }else {
      map[num.genre] = 1;
    }
    });

    return Object.entries(map).map(([name,count]) => {
      return{
        name,
        count
      }

    }).sort((a,b)=> b.count - a.count).slice(0,5);
  }
  
  
  
  


function getMostPopularBooks(books) { 
  let mostpopular = books.map(book=>(
    {name:book.title, count:book.borrows.length}))
  mostpopular.sort((bookA,bookB) => bookB.count - bookA.count)
  return mostpopular.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      const popularAuthor = `${author.name.first} ${author.name.last}`
      if (book.authorId === author.id) {
        popularAuthors.push({
          name: popularAuthor,
          count: book.borrows.length
        });
      }

    })

  })
  return topFive(popularAuthors)
}
function topFive(array) {
  return array.sort ((a,b) => b.count - a.count).slice(0,5)
}
  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
