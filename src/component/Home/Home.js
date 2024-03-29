import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Book from "../Product/Book";
import "./Home.css";

const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/Book`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, []);

  return (
    <div  style={{margin:'10px 20px'}}>
      <div className="row justify-content-around mx-1  mt-5">
        {book.length === 0 && (
          <div className="d-flex mt-2 pt-2 justify-content-center">
            <CircularProgress />
            <CircularProgress color="secondary" />
            <span className="h1"> Loading</span>
            <CircularProgress />
            <CircularProgress color="secondary" />
          </div>
        )}
        {book.map((bk) => {
          return <Book book={bk}></Book>;
        })}
      </div>
    </div>
  );
};

export default Home;
