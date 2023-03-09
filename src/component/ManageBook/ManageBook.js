import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import "./ManageBook.css";

const ManageBook = () => {
  const [book, setBook] = useState([]);
  //   const[deletedata ,setDeleteData]= useState(false)

  useEffect(() => {
    fetch("https://bookshopserver.vercel.app/Book")
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        // setDeleteData(false)
      });
  }, []);

  const handleDelete = (id) => {
    console.log("clicked", id);

    console.log(book.length);
    const deleted = book.filter((bk) => bk._id !== id);
    setBook(deleted)

    fetch(`https://bookshopserver.vercel.app/deleteBook/${id}`, {
      method: "DELETE",
    }).then((result) => {});
  };

  return (
    <div>
      <table className="table table-borderless h7 rounded">
        <thead className="bg-light p-1 ">
          <tr>
            <th scope="col">Book Name</th>

            <th className="authorName" scope="col">
              Author Name
            </th>
            <th className="price" scope="col">
              Price
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {/* { !deletedata &&  */}
        <tbody>
          {book.map((bk) => {
            return (
              <tr>
                <td style={{ fontWeight: "500" }}>{bk.name}</td>
                <td className="authorName" style={{ fontWeight: "700" }}>
                  {bk.AuthorName}
                </td>
                <td className="price" style={{ fontWeight: "700" }}>
                  ${bk.price}
                </td>
                <td style={{ fontWeight: "500" }}>
                  {/* <span className="actionBtn">
                    <FontAwesomeIcon
                      className="mr-2  text-success"
                      icon={faPencilAlt}
                    />
                  </span> */}
                  <span
                    onClick={() => handleDelete(bk._id)}
                    className="actionBtn"
                  >
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faTrashAlt}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBook;
