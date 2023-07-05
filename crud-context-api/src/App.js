import {Routes,Route,Link,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import DataProvider from './components/contextData';
import Create from './components/create';
import Delete from './components/delete';
import Update from './components/update';
import Read from './components/read';
function App() {
  return (
    <div className="App">
      <div className='title-container'>
          <h1>CRUD Operations Using Context API</h1>
        </div>
        <div className='container'>
        <div className='content'>
      <DataProvider>
        <Router>
          
          <div className='navi-container'>
            <ul>
              <li>
              <Link to="/create">Create Data</Link>
              </li>
              <li>
              <Link to="/read">Read Data</Link>
              </li>
              <li>
              <Link to="/update">Update Data</Link>
              </li>
              <li>
              <Link to="/delete">Delete Data</Link>
              </li>
            </ul>
           
          </div>
          <div className='content-container'>
          <Routes>
            <Route path="/create" element={<Create/>}/>
            <Route path='/update' element={<Update/>}/>
            <Route path='/read' element={<Read/>}/>
            <Route path='/delete' element={<Delete/>}/>
          </Routes>
          </div>
        </Router>
        
      </DataProvider>
      </div>
      </div>
    </div>
  );
}

export default App;