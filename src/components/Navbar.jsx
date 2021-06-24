import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Nav = () => {
  return (

    <div>
        <h1>Navbar</h1>
        <ul>
            <li><Link to="/components/addContact"><Button variant="primary">Create</Button></Link></li>
            <li><Button variant="info">Read</Button></li>
            <li><Button variant="dark">Update</Button></li>
            <li> <Button variant="danger">Delete</Button></li>
            <li><Link to="/components/addContact" className="btn btn-primary ml-auto">Create Contact</Link></li>
        </ul>
        
      
    </div>
  );
};

export default Nav;
