import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './App.css';

// Imports Components
import HeaderComponent from './components/HeaderComponent';
import ArtistsListPage from './pages/ArtistsListPage';

class App extends React.Component{

  render(){
    return (
      <Router>
        <div className="app">
          <HeaderComponent className="headerComponent"/>
          <Redirect from="/" to="/artists" />
          <Route path="/artists" component={ArtistsListPage}/>
        </div>
      </Router>   
    );
  }
  
}

export default App;
