import React from 'react';
import { Link } from 'react-router-dom'


class HeaderComponent extends React.Component{

  render(){
    return (
      <header style={headerStyle} className="header">
        <Link style={exampleCategoryStyle} to='/artists'>Artists</Link>
      </header>
    );
  }
}

const headerStyle = {
    color: 'white',
    backgroundColor:'#3c3131',
    fontSize: '16px',
    display: 'flex',
    height: '50px',
    alignItems: 'center'
}

const exampleCategoryStyle = {
  padding: '15px',
  color: 'white',
  textDecoration: 'none'
}
export default HeaderComponent;