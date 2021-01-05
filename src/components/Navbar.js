import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div>
      <ul className="unlist">
        <li className="list">
          <Link className="link" to="/">
            Home
          </Link>
        </li>

        <li className="list">
          <Link className="link" to="/todos">
            Todos
          </Link>
        </li>

        <li className="list">
          <Link className="link" to="/post">
            Post
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
