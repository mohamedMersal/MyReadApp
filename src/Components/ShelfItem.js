import React from 'react';
import BookItem from './BookItem';

export default function ShelfItem(props) {
  const nameSection = props.section;
  const books = props.books;
  // console.log('Shelf =>', books);
  const shelfName = props.shelfName;
  const updateShelf = props.updateShelf;
  const shelfBook = books?.filter((book) => book.shelf === shelfName );

return (
  <>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{nameSection}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

          {/* Book Item */}

          {shelfBook?.map((bookData, i) => {
            return(
            <BookItem
              key={bookData.id}
              book={bookData}
              updateShelf={updateShelf}
            />
            )
          })}

          {/* <BookItem/> */}
        </ol>
      </div>
    </div>
  </>
)
}
