import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Input from './Input/Input';
import Body from './Body/Body';
import { useState } from 'react';

function App() {

  const [text, setText] = useState([]);

  return (
    <div className="App">
      <Header />
      <Input  text = {text} setText = {setText}/>
      <Body text = {text} setText = {setText}/>
    </div>
  );
}

export default App;
