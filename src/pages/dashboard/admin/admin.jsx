import { Container } from "reactstrap";
import { NavTab } from "../../../components";
import Bank from "../../bank/bank";
import Account from "../../account/account";
import "./css/admin.scss";

const navItems = [
  { id: 1, title: "Accounts", content: <Account /> },
  { id: 2, title: "Banks", content: <Bank /> }
];

const Admin = () => {
  return (
    <div className="admin">
      <Container>
        <NavTab navItems={navItems} />
      </Container>
    </div>
  );
};

export default Admin;
