import './App.css';
import React from "react";
import {observer} from "mobx-react-lite";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = observer(() =>{
  return (
    <div className='App'>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Cart}/>
    </div>
  );
})

export default App;
