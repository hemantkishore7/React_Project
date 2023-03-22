import React from "react";

export default function Product(props) {
  const { data = {}, onChange = (item) => {}, disabled = false } = props;
  return (
    <div className="card mb-5 shadow p-3 bg-white">
      <div className="card-body">
        <div className="row">
          <div id="card-content">
            <img src={data.image} style={{ width: 350, height: 350 }}></img>
            <h3 className="card-head">{data.name || "Not Available"}</h3>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <p className="price" style={{ fontWeight: "bold", fontSize: 20 }}>
              {`₹${data.price}` || "Price Not Available"}
            </p>
            <button className="btn btn-warning mb-3">Buy Now</button>
            <button
              disabled={disabled}
              className={`btn ${disabled ? "btn-success" : "btn-primary"}`}
              onClick={() => onChange(data)}
            >
              {disabled ? "Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
