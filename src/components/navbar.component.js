import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          LEO WORLD!
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

//collapse navbar-collapse classes that will display or hide the menu item while clicking the button
//In Bootstrap, the navbar-nav class is used to define a navigation menu list that contains links (<a> elements) to different pages or sections of the website.The mr-auto class is used to apply a margin to the right side of the <ul> element. This is often used in conjunction with the Bootstrap navbar class to create a horizontal navigation menu that is aligned to the right side of the screen, leaving empty space to the left of the menu.
