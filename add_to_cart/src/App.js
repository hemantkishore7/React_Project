import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Cart from './pages/Cart'
function App() {
  const {page,setPage} = useState('Cart');
  return (
    <div className="App">
     <Cart/>
    </div>
  );
}

export default App;
