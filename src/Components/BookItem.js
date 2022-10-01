import React from 'react';
import imemg from '../images/peakpx.jpg';

export default function BookItem({book, updateShelf}) {
  // console.log('bookItem =>', book);
  const changeShelf = (e) => {
    updateShelf(book, e.target.value)
  }
  return (
    <>
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks == null || book.imageLinks.smallThumbnail == null? imemg : book.imageLinks.smallThumbnail})`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={changeShelf} defaultValue={book?.shelf || 'none'}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <div className="book-authors fw-semibold text-success">{book.shelf}</div>
      </div>
    </li>
    </>
  )
}
