import React from "react";

export default function Product(props) {
  const { data } = props;
  return (
    <div className="card mb-5">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="d-flex flex-column justify-content-center">
               <img src={data.image} style={{width:350, height:350}}></img>
              <h3 className="card-head">{data.name || "Not Available"}</h3>
              <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span></div>
              <p className="price" style={{fontWeight:"bold",fontSize:20}}>{`₹${data.price}` || 'Price Not Available'}</p>
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
