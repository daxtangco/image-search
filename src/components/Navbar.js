import React from "react";

class Navbar extends React.Component {
    render() {
        return (<nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-center">Unsplash Image Search</a>
        </div>
      </nav>);
    }
}

export default Navbar;