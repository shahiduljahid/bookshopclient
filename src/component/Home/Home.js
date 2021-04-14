import React, { useEffect, useState } from "react";

const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-earth-21963.herokuapp.com/Book")
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, []);
  console.log(book)
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
