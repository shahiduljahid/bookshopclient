import React, { useState } from "react";
import "./BookManagement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faPlusSquare,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const BookManagement = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [book, setBook] = useState({
    name: "",
    price: "",
    AuthorName: "",
    noImage: "",
    success: false,
    failed: "",
  });
  const handleBlur = (event) => {
    const newBookInfo = { ...book };
    newBookInfo[event.target.name] = event.target.value;
    setBook(newBookInfo);
  };
  const handleFile = (event) => {
    const imageData = new FormData();
    imageData.set("key", "f16e0919dbce32c8326397f504a1e7b1");
    console.log(event.target.files[0])
    imageData.append("image", event.target.files[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload",

        imageData
      )
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        const newBookInfo = { ...book };
        newBookInfo.noImage = "";
        setBook(newBookInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSubmit = () => {
    if (book.name && book.price && book.AuthorName && imageUrl) {
      const bookData = { ...book, imageUrl: imageUrl };

      setImageUrl(null);
      const updatedBookInfo = {
        ...book,

        noImage: "",
        failed: "",
        success: true,
      };
      setBook(updatedBookInfo);
    } else if (!imageUrl) {
      const newBookInfo = { ...book ,success: false };
      newBookInfo.noImage = "please upload a image";
      setBook(newBookInfo);
    } else {
      const newBookInfo = { ...book, success: false };
      newBookInfo.failed = "please give all information";
      setBook(newBookInfo);
    }
  };
  const handleFocus=(e)=>{
    e.target.value='';
    const newBookInfo = { ...book, success: false };
    
    setBook(newBookInfo);

  }

  return (
    <div className="container">
      <div className="row m-2">
        <div className="rounded height  sidebar col-xs-12 col-sm-4 col-md-3">
          <ul className="p-0">
            <Link className=" nav-item sidebar-link">
              <li
                onClick={() => setSidebarToggle(false)}
                className="item pb-3 "
              >
                <FontAwesomeIcon icon={faThLarge} /> Manage book
              </li>
            </Link>
            <Link className="nav-item sidebar-link">
              <li onClick={() => setSidebarToggle(true)} className="item pb-3 ">
                <FontAwesomeIcon icon={faPlusSquare} /> Add book
              </li>
            </Link>
            <Link className="nav-item sidebar-link">
              <li onClick={() => setSidebarToggle(true)} className="item pb-3 ">
                <FontAwesomeIcon icon={faEdit} /> Edit book
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-8  bg-light">
          <div className="row">
            <div className="col-12 pt-3 mb-3 title  ml-2 h6">ADD BOOK</div>

            {sidebarToggle ? (
              <div className="col-11 shadow p-4 ml-3 pt-5 mb-5 bg-white rounded">
                <div className="row">
                  <div className="col-xl-5 mb-5">
                    <form action="" className="">
                      <label>Book name</label>
                      <input
                      onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="form-control  mb-2 from-group"
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        id="name"
                        required
                      />

                      <label>Add price</label>
                      <input
                      onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="form-control mb-2  from-group"
                        type="text"
                        placeholder="Enter price"
                        name="price"
                        id="price"
                        required
                      />
                    </form>
                  </div>
                  <div className="col-xl-1"></div>
                  <div className="col-xl-5 mb-5">
                    <form action="" className="">
                      <label>Author name</label>
                      <input
                      onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="form-control mb-2  from-group"
                        placeholder="Enter name"
                        type="text"
                        name="AuthorName"
                        id="AuthorName"
                        required
                      />

                      <label>Add book cover photo</label>
                      <br />
                      <label htmlFor="fileBtn" className="uploadBtn">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faCloudUploadAlt}
                        />
                        Upload Photo
                      </label>
                      <input
                        onChange={handleFile}
                        className="from-group mb-2 "
                        type="file"
                        name="imageFile"
                        id="fileBtn"
                        required
                        hidden
                      />
                      <p style={{ color: "red", fontWeight: 500 }}>
                        {book.noImage}
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-xl-12 text-center alert">{book.failed}</div>
                {book.success && (
                  <div
                    style={{ color: "green" }}
                    className="col-xl-12 text-center h5"
                  >
                    <p>Book added successfully</p>
                  </div>
                )}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-success h3"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="col-11 shadow p-4 ml-3 pt-5 mb-5 bg-white rounded">
                BookManagement
                <h1>{book.name}</h1>
                <h1>{book.price}</h1>
                <h1>{book.AuthorName}</h1>
                <img src={imageUrl} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookManagement;
