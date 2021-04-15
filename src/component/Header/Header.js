import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'
import firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext
   
  );
  const hangleSignOut =()=>{
    firebase.auth().signOut().then((res) => {
        const userSignOut = {
            name : '',
            email : ''


        }
        setLoggedInUser(userSignOut)
       
      }).catch((error) => {
        // An error happened.
      });
  }

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <div className="logo-container"> <Link className="nav-link active  link" to={'/home'}><span className="logo">Book Shop</span></Link></div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-center">
          <Link className="nav-link active  link" to={'/home'}>Home</Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link active link" to={'/order'}>order</Link>
        </li>
        <li className="nav-item text-center">
          <Link className="nav-link active link" to={'/admin'}>admin</Link>
        </li>
        <li>
        {loggedInUser.email && (
          <a href  className=" nav-link border border-primary rounded">Hi {loggedInUser.name}</a>
        )}
        </li>
    
        <li className="nav-item text-center">
        {loggedInUser.email ? (
          <Link class="nav-link" to={"/login"}>
            <button onClick={()=>hangleSignOut()} className="btn btn-danger">Log out</button>
          </Link>
        ) : (
          <Link className="nav-link" to={"/login"}>
            <button className="btn btn-success">Log in</button>
          </Link>
        )}
        </li>        
      </ul>
     
    </div>
  </div>
</nav>
          
            
        </div>
    );
};

export default Header;