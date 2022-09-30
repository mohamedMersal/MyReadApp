import React from 'react';
import BookItem from './BookItem';


export default function ShelfSearch({searchResult, updateShelf}) {
return (
  <>
  <ol className="books-grid">
          {searchResult?.map((book) => {
            return(
            <BookItem
              key={book.id}
              book={book}
              updateShelf={updateShelf}
            />
            )
          })}
          </ol>
  </>
)
}
