import React, { Component } from 'react';
import './App.css';
import '../service/floatingButton.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;
