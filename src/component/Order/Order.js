import React, { useContext} from "react";
import { useHistory } from "react-router";
import { BookContext } from "../../App";
import './Order.css'

const Order = () => {
  // const [orderData, setOrderData] = useState([]);
  const[cart ,setCart] =useContext(BookContext);
  const history = useHistory();
  // console.log(orderData )
  // console.log(cart)


  // useEffect(() => {
  //   fetch("http://localhost:4050/order")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrderData(data);
  //     });
  // }, []);
  const handleCheckOut =()=>{
    console.log('clicked')
    setCart([])
    history.push('/shipment')

  }


  const totalValue = cart.reduce((total,or)=>total + Number(or.price)*or.quantity,0)

  return (
    <div className="container">
      <div className="row justify-content-around mt-5 pt-5">
        <div className=" col-xs-11 p-0 col-sm-8">
          <table className="table table-borderless h7 shadow rounded">
            <thead>
              <tr className="border-bottom border-dark">
                <td >Description</td>
                <td >Quantity</td>
                <td >Price</td>
                
              </tr>
            </thead>
            <tbody>
                {
                    cart.map(or=>{
                        return(
                            <tr >
               
                            <th>{or.name}</th>
                            <td className="pl-4" >{or.quantity}</td>
                            <th>${or.price}</th>
                          </tr>

                        )
                    })
                }
             
              <tr className="border-top border-dark mb-5">
               
               <th>Total</th>
               <td></td>
               <th>${totalValue}</th>
             </tr>

            </tbody>
          </table >
          <div className=" d-flex justify-content-end mr-2"> <button  onClick={handleCheckOut} className="mt-3 btn btn-primary">CheackOut</button></div>
          
        </div>
      </div>
    </div>
  );
};

export default Order;
