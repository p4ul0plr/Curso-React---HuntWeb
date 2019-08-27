import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Routes from './routes';
import Header from './components/Header';
import './styles.css'

/* function App() {
  return (
    <div className="App">
      <h1>Hello Wolrd!</h1>
    </div>
  );
} */
//A forma de cima é equivalente a de baixo
const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
