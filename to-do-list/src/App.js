import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextCpmponent';
import TodoComponent from './components/TodoComponent';

function App() {
  return (
    <div className="App">
     {/* <TextComponent firstName='Hemant' lastName='Kishore' age={24}/> */}
     <TodoComponent/>
    </div>
  );
}

export default App;
