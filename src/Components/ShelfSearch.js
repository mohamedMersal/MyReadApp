import React from 'react';
import BookItem from './BookItem';


export default function ShelfSearch({searchBooks,updateShelf}) {
return (
  <>
  <ol className="books-grid">
          {searchBooks?.map((book) => {
            return(<>
            <BookItem
              key={book.id}
              book={book}
              updateShelf={updateShelf}
            />
            </>)
          })}
          </ol>
  </>
)
}
