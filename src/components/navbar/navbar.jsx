import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { MainContext } from "../../context/mainContext.jsx";
import LocalModal from "../modal/modal";
import FaIcon from "../faicon/faicon";
import "./css/navbar.scss";

const modalData = {
  title: "User",
  body: <h3>User related data and configs</h3>
};

const NavBar = () => {
  const mainctx = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <Navbar expand="sm" color="secondary" dark={true}>
        <NavbarBrand>
          Bank{" "}
          {mainctx.user && <span className="userTag">({mainctx.user})</span>}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="navIconLink" onClick={toggleModal}>
                <FaIcon id="user" />
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/" className="navIconLink nav-link">
                <FaIcon id="logout" />
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <LocalModal
        toggle={toggleModal}
        isOpen={isOpenModal}
        modalData={modalData}
      />
    </>
  );
};

export default NavBar;
