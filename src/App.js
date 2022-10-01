import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as BooksAPI from './BooksAPI';
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import NotFound from "./Pages/NotFound";

function App() {
  const [booksData, setBooksData] = useState([]);


  // Start Get All Book
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
      setBooksData(res);
  };
  useEffect(() => {
    getBooks();
    // console.log('App =>', booksData);
  }, []);
  // End Get All Book

  // Start Update
  // const updateShelf = async (book, nameShelf) => {
  //   await BooksAPI.update(book, nameShelf);
  //   getBooks();
  //   };
  const updateShelf = (book, nameShelf) => {
      BooksAPI.update(book, nameShelf).then(() => {
        book.shelf = nameShelf;
        setBooksData(booksData.filter((b) => b.id !== book.id).concat(book));
      });
  };
  // End Update

  return (
    <>
    <div className="app">
    <Routes>
      <Route 
        path={'/'} 
        element={ <Home 
                  books={booksData}
                  updateShelf={updateShelf}
                  /> }/> 
      <Route 
        path='search' 
        element={ <Search
                    updateShelf={updateShelf}
                    booksData={booksData}
                    /> }/>   
        
        <Route path="*" element={ <NotFound/> }/>
    </Routes>
    </div>

    </>
  );
}

export default App;
