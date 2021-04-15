import React from 'react';

const Book = (props) => {
    const{name,AuthorName,imageUrl,price} = props.book
    
    return (
        <div className="col-xl-3 p-2 m-2 mb-3 shadow rounded">
            <img className='img-fluid  text-center px-4 py-3 bg-light bookimage' src={imageUrl} alt=""/>
            <h4 style={{fontWeight: 'bold'}}>{name}</h4>
            <h6>{AuthorName}</h6>
            <div className="d-flex pt-3 pb-3 justify-content-between mx-1">
                <h4  className="text-primary "style={{fontWeight: 'bold'}}>${price}</h4>
                <button  style={{fontWeight: 'bold'}} className="btn btn-primary ">Buy Now</button>
        

            </div>
            

         
            
        </div>
    );
};

export default Book;