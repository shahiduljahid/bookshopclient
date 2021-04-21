import React, { useContext, useState } from "react";
import { set, useForm } from "react-hook-form";
import { BookContext, userContext } from "../../App";
import Payment from "../Payment/Payment";

const Shipment = () => {
  const[cart ,setCart] =useContext(BookContext);
  const [loggedInUser, setLoggedInUser] = useContext(userContext
    
    );
    const[shipment, setShipment] = useState();
  const [orderSubmitted , setOrderSubmitted] = useState(false);
  const [err ,setErr] =useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    console.log(data)
    setShipment(data)
   
  
    if(data.address && data.phoneNumber){
    
      setOrderSubmitted(true)

    }
    else{
   
     setErr(true)

    }
  };

  const handlePayment =(paymentId)=>{

    const data = { 'user':sessionStorage.getItem("token") ||loggedInUser  ,'cart':cart , 'shipment':shipment ,paymentId}
    console.log(data)
     
      const url=`https://murmuring-earth-21963.herokuapp.com/addOrder`
      fetch(url,{
        method: 'POST',
        headers: {  'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        
      })
      .then(res=>{console.log(res)})
      setCart([])

  }
 

  

  return (
    <div className="container">
      <div className="row justify-content-around">
        {
          !orderSubmitted && <div className="col-xl-5 shadow m-5 p-3 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Address:</label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className="form-control form-group"
              placeholder="Your address"
             
              {...register("address",{ required: true })}
            />
            <label htmlFor="">Phone Number:</label>
            {/* include validation with required or other standard HTML validation rules */}
            <input
              className="form-control form-group"
              placeholder="your phone Number"
              {...register("phoneNumber", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className="btn btn-primary" type="submit" />
          </form>
        {
          err && <p className="text-center text-danger">please give all information</p>
        }
        </div>
        }
    {
      orderSubmitted && <div className="col-xs-10 p-2 col-sm-8 shadow m-1 mt-5 rounded">

    <Payment handlePayment={handlePayment}></Payment>

      </div>
    }
      </div>
    </div>
  );
};

export default Shipment;
