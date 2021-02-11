import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  return (
    <div className="heado">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">TO-DO-LIST</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {!props.authCredentials.fname ? (
              <NavItem className="my-auto mx-2">
                <Link to="/login">Login</Link>{" "}
              </NavItem>
            ) : (
              <>
                <NavItem className="my-auto mx-2">
                  <Link to="/todolist">TodoList</Link>{" "}
                </NavItem>
                <NavItem className="my-auto mx-2">
                  <Link to="/visibilityfilter">Visibility Filter</Link>{" "}
                </NavItem>
              </>
            )}
          </Nav>
          <Nav>
            <NavItem className="my-auto mx-2">
              {props.authCredentials.fname}
            </NavItem>

            {props.authCredentials.fname ? (
              <NavItem className="my-auto mx-2">
                <Link to="/logout">Logout</Link>{" "}
              </NavItem>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {props.authCredentials.fname ? <h1>TODO-APP Using Redux </h1> : <></>}
      {props.authCredentials.fname ? <>,</> : <h2>Please Log in For entered TODO'S</h2> }
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    authCredentials: state.authCredentials
  };
};

export default connect(mapStateToProps)(Header);
