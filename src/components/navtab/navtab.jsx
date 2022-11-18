import { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";
import "./css/navtab.scss";

const NavTab = ({ navItems }) => {
  const [active, setActive] = useState(1);
  const showTab = (id) => {
    setActive(id);
  };
  return (
    <div className="navTab">
      <Nav tabs>
        {navItems.map((item) => {
          return (
            <NavItem key={item.id}>
              <NavLink
                className={active === item.id ? "active" : ""}
                onClick={() => showTab(item.id)}
              >
                {item.title}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={active}>
        {navItems.map((item) => {
          return (
            <TabPane key={item.id} tabId={item.id}>
              <Row>
                <Col sm="12">{item.content}</Col>
              </Row>
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
};

export default NavTab;
