import React from "react";
import Product from "../components/Product";

const data = [
  {
    name: "Iphone 14",
    price: 79999,
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ZDY57yTQL._SL1500_.jpg",
  },
  {
    name: "Samsung S23",
    price: 89999,
    image:
      "https://www.reliancedigital.in/medias/Samsung-S23-493665070-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGRhLzk5NTczMTU2NDEzNzQuanBnfDZlNThhOTcyYmM3YmNmYzYyYjNmYmNjNTE2NzZkNGVlZmM5YjA3YTVhOTI0YzRhM2Q5YTYxMzQ5ZGVkZTJlYjU",
  },
  {
    name: "Pixel 7",
    price: 54999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4E9POVQOIvc35ruhPxij2eWHfil9KnBw7A&usqp=CAU",
  },
  {
    name: "Oneplus 11 pro",
    price: 49990,
    image:
      "https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/black-img.png",
  },
];

function Cart() {
  return (
    <div className="container">
      <header
        className="header"
        style={{
          margin: 50,
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: "bold",
          fontSize: 60,
        }}
      >
        E-Kart
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            {data.map((element, index) => (
              <Product key={index} data={element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
