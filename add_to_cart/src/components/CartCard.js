import React from "react";

export default function CartCard(props) {
  const { data = {}, onRemove =(item)=>{} } = props;
  return (
    <div className="card mb-3 shadow p-3 bg-white" id="wishList" >
      <div className="card-body">
        <div className="row">
          <div className="content">
            <img src={data.image} style={{ width: 150, height: 150 }}></img>
            <h3 className="card-head">{data.name || "Not Available"}</h3>

            <button
              className="btn btn-outline-danger mb-3"
              onClick={()=> onRemove(data)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
