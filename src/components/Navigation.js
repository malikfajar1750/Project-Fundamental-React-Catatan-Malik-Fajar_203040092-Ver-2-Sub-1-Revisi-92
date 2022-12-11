import React from 'react';
import { Link } from 'react-router-dom';

 
function Navigation() {
  return (
    <nav>
      <ul>
        <li className='col'><Link to="/">Home</Link></li>
        <br></br>
        <br></br>
        <li className='col'><Link to="/add">Add </Link></li>
      </ul>
    </nav>
  )
}
 
export default Navigation;