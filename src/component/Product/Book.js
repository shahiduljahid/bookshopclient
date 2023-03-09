import React, { useContext } from "react";
// import { useState } from 'react/cjs/react.development';
import { BookContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Book = (props) => {
  const { name, AuthorName, imageUrl, price, _id } = props.book;

  // props.book.quantity

  const [cart, setCart] = useContext(BookContext);
  const findInCart = cart.find((bk) => bk._id === _id);
  const quantity = findInCart ? findInCart.quantity : 0;

  const handleDelete = (id) => {
    const newCart = cart.filter((pd) => pd._id !== id);
    setCart(newCart);
  };
  const handleRemove = (id) => {
    const sameProduct = cart.find((pd) => pd._id === id);
    let newCart;
    let count=1;
    if (sameProduct) {
      count = parseInt(sameProduct.quantity) - 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd._id !== id);
      newCart = [...others, sameProduct];
    }
    setCart(newCart);
  };
  // useEffect(()=>{

  //   fetch('http://localhost:4050/orders')
  //   .then(response =>response.json())
  //   .then(data=>setCart(data))

  // },[])

  const handleOrder = (book) => {
    // console.log(book)

    const toBeAddedKey = book._id;
    const sameProduct = cart.find((pd) => pd._id === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd._id !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      book.quantity = 1;
      newCart = [...cart, book];
    }
    setCart(newCart);

    //   const uniqueUrl=`http://localhost:4050/addUniqueOrder`
    //   fetch( uniqueUrl,{
    //     method: 'POST',
    //     headers: {  'Content-Type': 'application/json'},
    //     body: JSON.stringify({...cart})

    //   })
    //   .then(res=>{console.log(res)})

    // const url=`http://localhost:4050/addOrders`
    // fetch(url,{
    //   method: 'POST',
    //   headers: {  'Content-Type': 'application/json'},
    //   body: JSON.stringify(props)

    // })
    // .then(res=>{console.log(res)})
  };

  return (
    <div className="col-xl-4 col-md-6 col-xs-12 pe-2 mb-3">
    <div className="p-2  shadow rounded">
      <img
        className="img-fluid  text-center px-5 py-4 rounded bg-light bookimage"
        src={imageUrl}
        alt=""
      />
      <h4 className="mt-2 ml-1" style={{ fontWeight: "bold" }}>
        {name}
      </h4>
      <h6 className="mt-3 ml-1">{AuthorName}</h6>
      <div className="d-flex pt-3 pb-3 justify-content-between mx-1">
        <h4 className="text-primary " style={{ fontWeight: "bold" }}>
          ${price}
        </h4>
        {quantity ? (
          <h4 className="text-primary " style={{ fontWeight: "bold" }}>
            Quantity: {quantity}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleRemove(_id)}
              className="actionBtn"
            >
              <FontAwesomeIcon className="text-danger" icon={faMinusCircle} />
            </span>{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(_id)}
              className="actionBtn"
            >
              <FontAwesomeIcon className="text-danger" icon={faTrashAlt} />
            </span>
          </h4>
        ) : (
          <></>
        )}

        <button
          onClick={() => handleOrder(props.book)}
          style={{ fontWeight: "bold" }}
          className="btn btn-primary "
        >
          {quantity ? "ADD MORE" : "Buy Now"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default Book;
