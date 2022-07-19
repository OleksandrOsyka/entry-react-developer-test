import { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="all">All</Link>
        </li>
        <li>
          <Link to="clothes">Clothes</Link>
        </li>
        <li>
          <Link to="tech">Tech</Link>
        </li>
      </ul>
    );
  }
}


export default Navigation;
