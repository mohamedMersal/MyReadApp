import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as BooksAPI from './BooksAPI';
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import NotFound from "./Pages/NotFound";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [text, setText] = useState("");
  const [boxSearch, setBoxSearch] = useState([]);

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
  const updateShelf = async (book, nameShelf) => {
    await BooksAPI.update(book, nameShelf);
    getBooks();
    };
  // End Update

  // Start Search
const bookSearch = async () => {
  if(text.length > 0){
    document.querySelector('.books-grid').style.display = 'flex';
  }else{
    document.querySelector('.books-grid').style.display = 'none';
  };
  if(text) {
    const res = await BooksAPI.search(text);
    if(res.error === 'empty query'){
      setBoxSearch([]);
    } else{
      const x = res.map((bookSearch) => {
      booksData.forEach((book) =>{
        if(bookSearch.id === book.id) bookSearch.shelf = book.shelf 
      });
      return bookSearch
    });
    if(x.error){
      setBoxSearch([]);
    } else {
      setBoxSearch(x)
    };
  };
  };
};
useEffect(() => {
  bookSearch();
  }, [text, boxSearch]);
  // End Search

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
        path={'search'} 
        element={ <Search 
                  text={text}
                  setText={setText}
                  boxSearch={boxSearch}
                  updateShelf={updateShelf}
                  /> }/>   
        
        <Route path="*" element={ <NotFound/> }/>
    </Routes>
    </div>

    </>
  );
}

export default App;
