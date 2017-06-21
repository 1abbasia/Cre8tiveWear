import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HoodiesList from './components/HoodiesList';
import ShirtList from './components/ShirtList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      
    }

  
  }}

  componentDidMount() {
    
    fetch('https://localhost3001')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          return {
            data: responseJson
          }
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CreativeWear</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ShirtList 
        
        
        />
          
        <HoodiesList />
      </div>
    );
  }


export default App;