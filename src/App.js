
import './App.css';
import { createContext,  useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Nomatch from './component/Nomatch/Nomatch';
import Order from './component/Order/Order';
import BookManagement from './component/BookManagement/BookManagement';
import Login from './component/Login/Login';
// import Route from './component/PrivateRoute/PrivateRoute';




 export const userContext = createContext();

function App() {
  const [loggedInUser ,setLoggedInUser] =useState([])
 

  return (
    <userContext.Provider value={[loggedInUser ,setLoggedInUser]}>
    <div >
    
      

    <Router>
    <Header></Header>
    
        <Switch>
          <Route path="/home">
            
            <Home></Home>
          </Route>
          <Route path="/order">
            <Order></Order>
          
          </Route>
          <Route path="/admin">
            <BookManagement></BookManagement>
           

          </Route>
          <Route path="/login">
          <Login></Login>
           
           </Route>
           <Route exact path="/">
          
           <Home></Home>
           </Route>
           <Route path="*">
             <Nomatch></Nomatch>
           
           </Route>
        </Switch>
      
    </Router>

     
    </div>
    </userContext.Provider>
  );
}

export default App;
