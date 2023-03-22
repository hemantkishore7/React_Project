import React,{useState} from "react";
import Product from "../components/Product";
import CartCard from "../components/CartCard";

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
  {
    name: "Oppo Reno 8 Pro",
    price: 29999,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666100566/Croma%20Assets/Communication/Mobiles/Images/258445_0_kungpg.png/mxw_640,f_auto",
  },
  {
    name: "Vivo v27 Pro",
    price: 37999,
    image:
      "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1677055988557/a3fe0a6675fede93f198a680274b06f7.png",
  },
];

function Cart() {
  const [cart, setCart] = useState([]);

  function handleChange(item={}){
    const copyCart = [...cart];
    //console.log(item);
    if(item.name){
    copyCart.push(item)}
    setCart(copyCart)
  }

  function handleCart(item={}){
     let copyCart = [...cart]
     if(item.name){
      copyCart = copyCart.filter((d,i)=> d.name !== item.name)
     }
     setCart(copyCart);
  }

  function checkStatusItem(item={}){
   let status = false; 
   if(item.name){
   status = cart.filter((d,i)=> 
   d.name === item.name).length > 0 ? true : false;
   }
   
  return status;
  }

  return (
    <div className="container">
    <div className="nav-bar">
   
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
      </header></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <h4 className="title text-center">Product List</h4>
            {data.map((element, index) => (
              <Product key={index} data={element} onChange={handleChange} disabled={checkStatusItem(element)}/>
            ))}
          </div>
          <div className="col-lg-4 " id="wishList">
            <div className="cart-list">
            <h4 className="title text-center">Your List</h4>
           {cart.map((d,i)=>(
            <CartCard data={d}
              key={i}
              onRemove={handleCart}
            />
           ))
          }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
